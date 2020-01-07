import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddLogForm from './addLog';

describe(`addLog component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.addLog by default', () => {
    const wrapper = shallow(<AddLogForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the addLog given props', () => {
    const wrapper = shallow(<AddLogForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})