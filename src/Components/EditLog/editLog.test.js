import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditLogForm from './editLog';

describe(`edLog component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.editLog by default', () => {
    const wrapper = shallow(<EditLogForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the editLog given props', () => {
    const wrapper = shallow(<EditLogForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})