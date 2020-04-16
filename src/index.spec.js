import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import {
  render,
  findByRole,
  findByText,
  fireEvent,
} from '@testing-library/react';
sinon.stub(console, 'warn').resolves(null);
sinon.stub(console, 'error').resolves(null);

let div;
const APP_NAME = process.env.REACT_APP_NAME;
const methodMount = `render${APP_NAME}`;
const methodUnmount = `unmount${APP_NAME}`;
let AppWrapper;
let container;

beforeEach(() => {
  div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  AppWrapper = require('./index').AppWrapper;
  container = render(<AppWrapper />).container;
});

afterEach(() => {
  AppWrapper = null;
  container = null;
});

describe('index.js', () => {
  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('Should attach react app into div with id=root ', () => {
    global[methodMount]('root');
    expect(container.childElementCount).toBeGreaterThan(0);
  });

  it('Should call unmountComponentAtNode if methodUnmount is called', async () => {
    const reactDOMStub = sinon.stub(ReactDOM, 'unmountComponentAtNode');
    global[methodUnmount]({ containerId: 'root' });
    expect(reactDOMStub.calledOnce).toBe(true);
  });

  it('Should navigate to /test route and render MF element', async () => {
    const link = await findByText(container, 'Test');
    fireEvent.click(link);
    const main = await findByRole(container, 'main');
    expect(main.getAttribute('id')).toContain('container');
    expect(container).toMatchSnapshot();
  });
});
