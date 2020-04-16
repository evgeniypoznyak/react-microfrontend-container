import {
  mountMicroFrontend,
  unmountMicroFrontend,
} from './MicroFrontendFactory.helpers';
const containerName = 'testingContainerName';

beforeEach(() => {
  window[`render${containerName}`] = undefined;
  window[`unmount${containerName}`] = undefined;
});

describe('MicroFrontendFactory.helpers', () => {
  it('Should call renderHandler if window[renderMethod] is exist', () => {
    const mockRender = jest.fn((arg1, arg2) => true);
    window[`render${containerName}`] = mockRender;
    mountMicroFrontend(containerName, null);
    expect(mockRender).toBeCalled();
  });

  it('Should call console.error if window[renderMethod] is not exist', () => {
    const mockConsoleError = jest.fn();
    console.error = mockConsoleError;
    mountMicroFrontend(containerName, null);
    expect(mockConsoleError).toBeCalled();
  });

  it('Should call unmountHandler if window[renderMethod] is exist', () => {
    const mockUnmount = jest.fn((arg1, arg2) => true);
    window[`unmount${containerName}`] = mockUnmount;
    unmountMicroFrontend(containerName);
    expect(mockUnmount).toBeCalled();
  });

  it('Should call console.error if window[unmountHandler] is not exist', () => {
    const mockConsoleError = jest.fn();
    console.error = mockConsoleError;
    unmountMicroFrontend(containerName);
    expect(mockConsoleError).toBeCalled();
  });
});
