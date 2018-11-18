import React from 'react';
import chai from 'chai';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import InputText from '../Component/Input/InputText'

configure({adapter: new Adapter()});
chai.use(chaiEnzyme())

describe('<InputText/>', function () {
  it('should mount with an input.', function () {
    const wrapper = shallow(<InputText/>);
    expect(wrapper.find('input')).to.have.lengthOf(1);

  });

  it('should mount without a label.', function () {
    const wrapper = shallow(<InputText/>);
    expect(wrapper.find('label')).to.not.have.lengthOf(1);

  });

  it('should have an input with className when given one', function () {
    const wrapper = mount(<InputText className = "Hello"/>);
    expect(wrapper.find("input")).to.have.className("Hello");
  })
});
