import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('<Home/>', () => {
  it('should render', () => {
    expect(mount(<Home />).text()).toContain('Home');
  });
});
