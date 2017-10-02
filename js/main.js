import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './work';

const myWorkProps = [
  {
    'title': "EIS-eGRC",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
      'comment': ""
    }
  },
  {
    'title': "Online Portfolio",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "screenshot of a project involving chemistry",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
      'comment': `"A multi-line" comment hello
                  world.`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWorkProps}/>, document.getElementById("myWork"));
