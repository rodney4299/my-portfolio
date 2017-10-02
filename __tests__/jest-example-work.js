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
  it("Should be a 'span' element", () => {
    //expect("Hello").toEqual("Hello");
    //console.log(component.debug());
    expect(component.type()).toEqual('span');
  });
  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWorkProps.length);
  });
  it("Should allow the modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });
});

describe("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWorkProps[1]}
    openModal={mockOpenModalFn}/>);

  let images = component.find("img");
  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });
  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWorkProps[1].image.src);
  });
  it("Should call the openModal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});
