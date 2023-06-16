import '@testing-library/jest-dom';

window.matchMedia = jest.fn().mockImplementation(() => {
  return {
    matches: false,
    media: '',
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  };
});
