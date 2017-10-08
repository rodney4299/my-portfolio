import React from 'react';
import ExampleWorkModal from '../js/work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const myWorkProps = {
    'title': "Exective Information System - Enterprise Governamce Risk and Compliance",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "screenshot of an enterprise application project involving front, middle, and back-end code",
      'src': "https://s3.amazonaws.com/portfolio.rodneymorris/images/EIS_Logo.PNG",
      'comment': ""
    }
};

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myWorkProps}
    open={false}/>);

  let openComponent = shallow(<ExampleWorkModal example={myWorkProps}
    open={true}/>);

  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.getElement().props.href).toEqual(myWorkProps.href);
  });

  it("Should have the modalClass set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
});
