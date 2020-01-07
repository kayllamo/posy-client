import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogList from './LogList';

describe(`ItineraryList component`, () => {
  const props = {
    itinerary: {
      "id": 1,
      "title": "test"
    }
  };

  it('renders the ItineraryList given props', () => {
    const wrapper = shallow(<LogList {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})