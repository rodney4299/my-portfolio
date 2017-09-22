import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

s3 = boto3.resource("s3", config=Config(signature_version="s3v4"))

portfolio_bucket = s3.Bucket("portfolio.rodneymorris")
build_bucket = s3.Bucket("portfoliobuild.rodneymorris")

portfolio_zip = StringIO.StringIO()
build_bucket.download_fileobj("portfoliobuild.zip", portfolio_zip)

with zipfile.ZipFile(portfolio_zip) as myzip:
    for fileName in myzip.namelist():
        obj = myzip.open(fileName)
        portfolio_bucket.upload_fileobj(obj, fileName,
            ExtraArgs={"ContentType": mimetypes.guess_type(fileName)[0]})
        portfolio_bucket.Object(fileName).Acl().put(ACL="public-read")
