import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from '..';


describe('#render screens', () => {
  it('should render home sreen', () => {
    const wrapper = mount(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});