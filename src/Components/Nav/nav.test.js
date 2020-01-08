import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';

describe(`Nav component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a Hero by default', () => {
    const wrapper = shallow(<Nav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the Landing given props', () => {
    const wrapper = shallow(<Nav {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})