import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './work';

const myWorkProps = [
  {
    'title': "EIS-eGRC",
    'image': {
      'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
      'comment': ""
    }
  },
  {
    'title': "Online Portfolio",
    'image': {
      'desc': "screenshot of a project involving chemistry",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
      'comment': `"A multi-line" comment hello
                  world.`
    }
  }
]

ReactDOM.render(<ExampleWork workFunc={myWorkProps}/>, document.getElementById("myWork"));
