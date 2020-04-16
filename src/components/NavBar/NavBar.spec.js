import { mount } from 'enzyme';
import React from 'react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('<NavBar/>', () => {
  it('should render', async () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it(`Should render a elements with text`, () => {
    const container = mount(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const links = container.find('a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toContain('Home');
    expect(links.at(1).text()).toContain('Test');
  });
});
