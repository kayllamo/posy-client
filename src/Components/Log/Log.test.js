import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Log from './Log';

describe(`AddActivityItemForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.AddActivityItemForm by default', () => {
    const wrapper = shallow(<Log />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the AddActivityItemForm given props', () => {
    const wrapper = shallow(<Log {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})