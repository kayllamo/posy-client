import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hero from './hero';

describe(`Hero component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a Hero by default', () => {
    const wrapper = shallow(<Hero />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the Landing given props', () => {
    const wrapper = shallow(<Hero {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})