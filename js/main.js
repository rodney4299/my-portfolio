import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './work';

const myWorkProps = [
  {
    'title': "Hire & Develop the Best",
    'href': "https://example.com",
    'desc': "Leaders move forward and improve with every person they hire",
    'image': {
      'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Leadership/LeadershipPrinciples.png",
      'comment': ""
    }
  } //,
  // {
  //   'title': "Customer Obsession",
  //   'href': "https://example.com",
  //   'desc': "The #1 most important person is the customer",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },
  // {
  //   'title': "Think Big",
  //   'href': "https://example.com",
  //   'desc': "Have huge ambitions and go out of your way to be impactfulf.",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Are Right, A Lot",
  //   'href': "https://example.com",
  //   'desc': "Leaders have strong judgment",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/leadership/LeadershipPrinciples.png",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },
  // {
  //   'title': "Have Backbone",
  //   'href': "https://example.com",
  //   'desc': "Challenge decisions constructively, then commit unless persuaded otherwise",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Frugality",
  //   'href': "https://example.com",
  //   'desc': "Achieve more with less",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },
  // {
  //   'title': "Bias for Action",
  //   'href': "https://example.com",
  //   'desc': "Get things done!",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Learn and be Curious",
  //   'href': "https://example.com",
  //   'desc': "Improve, develop and ask questions!",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },{
  //   'title': "Earn Trust",
  //   'href': "https://example.com",
  //   'desc': "Treat people with respect, get respect and trust!",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Ownership",
  //   'href': "https://example.com",
  //   'desc': "Take ownership of situations and be responsible & accountable; not not my problem or that's not what I do; instead, let's sort it out and get you to the person that can help.",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },
  // {
  //   'title': "Invent & Simplify",
  //   'href': "https://example.com",
  //   'desc': "Lead teams that innovate and invent.",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Deep Dive",
  //   'href': "https://example.com",
  //   'desc': "Look into things deeply to analyze data/info for insight.",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // },
  // {
  //   'title': "Insist on The Highest Standards",
  //   'href': "https://example.com",
  //   'desc': "Domonstrate you can work to high standards, always!",
  //   'image': {
  //     'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
  //     'comment': ""
  //   }
  // },
  // {
  //   'title': "Deliver Results",
  //   'href': "https://example.com",
  //   'desc': "Get things done in a timely manner! Overcome obstacles w/ vigor, resilience and determination.",
  //   'image': {
  //     'desc': "Online resume.",
  //     'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/Portfolio_Image.PNG",
  //     'comment': `"A multi-line" comment hello
  //                 world.`
  //   }
  // }
]

ReactDOM.render(<ExampleWork work={myWorkProps}/>, document.getElementById("myWork"));
