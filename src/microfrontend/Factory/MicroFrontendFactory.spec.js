import { render } from '@testing-library/react';
import MicroFrontendFactory from './MicroFrontendFactory';
import React from 'react';

jest.mock('./MicroFrontendFactory.helpers', () => ({
  attachScript: () => jest.fn(),
  unmountMicroFrontend: jest.fn(),
}));

const containerName = 'testingContainerName';

const mockRender = jest.fn((arg1, arg2) => true);
const mockConsoleError = jest.fn(() => true);
console.error = mockConsoleError;

beforeEach(() => {
  jest.resetModules();
  window[`render${containerName}`] = mockRender;
});

afterEach(() => {
  window[`render${containerName}`] = undefined;
});

describe('MicroFrontendFactory.helpers', () => {
  it('Should render with id=testingName', async () => {
    const mockPayload = {
      host: 'http://localhost:4000',
      config: null,
      onError: jest.fn(),
    };

    const { findByRole } = render(
      <MicroFrontendFactory
        name={containerName}
        host={mockPayload.host}
        config={mockPayload.config}
        onError={mockPayload.onError}
      />
    );
    const element = await findByRole('main');
    expect(element.getAttribute('id')).toContain(containerName);
  });
});

// // OPTION 1
// import {unmountMicroFrontend} from './MicroFrontendFactory.helpers';
//
//
// jest.mock("./MicroFrontendFactory.helpers", () => ({
//   attachScript: () => jest.fn(),
//   unmountMicroFrontend: jest.fn().mockImplementation(() => {
//     console.log('test!')
//   })
// }));

// // OPTION 2
// let myDep;
// const mockUnmountMicroFrontend = jest.fn();
//
// beforeEach(async () => {
//   jest.resetModules();
//myDep = (await import('./MicroFrontendFactory.helpers')).unmountMicroFrontend;
//   myDep = mockUnmountMicroFrontend;
// })
