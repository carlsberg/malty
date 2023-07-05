export {};
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '@splidejs/react-splide/css/core$': 'identity-obj-proxy'
  }
};
