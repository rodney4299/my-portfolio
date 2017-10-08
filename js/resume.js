$(document).ready(function(){
  $.get("resume-portion.html", function(data) {
    $("#myResume").html(data);
  });
});
