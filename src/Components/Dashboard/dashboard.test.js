import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from './dashboard';

describe(`dashboard component`, () => {
  const props = {
    itinerary: {
      "id": 1,
      "log": "test"
    }
  };

  it('renders the ItineraryList given props', () => {
    const wrapper = shallow(<Dashboard {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})