import React from 'react';

class ExampleWork extends React.Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">

        { this.props.workFunc.map( (example, idx) => {
          return (
            <ExampleWorkBubble example={example} key={idx} />
          )
         })
        }

        {/* a comment
          in JSX
        <div className="section__exampleWrapper">
          <div className="section__example">
            <img alt="screenshot of a project involving chemistry"
                 className="section__exampleImage"
                 src="https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG"/>
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered ">
                Online Portfolio
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
        */}

      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render (){
    let exampleVar = this.props.example;
    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt={ exampleVar.image.desc }
               className="section__exampleImage"
               src={ exampleVar.image.src }/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { exampleVar.title }
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWork;
