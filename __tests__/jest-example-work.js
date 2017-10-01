import React from 'react';
import ExampleWork, { ExampleWorkBubble } from '../js/work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

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
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWorkProps}/>);
  //let component = shallow(<ExampleWork />);
  it("Should be a 'section' element", () => {
    //expect("Hello").toEqual("Hello");
    //console.log(component.debug());
    expect(component.type()).toEqual('section');
  });
  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWorkProps.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWorkProps[1]}/>);
  let images = component.find("img");
  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });
  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWorkProps[1].image.src);
  });
});
