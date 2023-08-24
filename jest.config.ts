export {};
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: [
    'malty/**/**/**.{js,jsx,ts,tsx}',
    '!malty/**/**/emojiFlag.{js,jsx,ts,tsx}',
    '!malty/**/**/index.{js,jsx,ts,tsx}',
    '!malty/**/**/**.types.{js,jsx,ts,tsx}',
    '!malty/**/**/**.styled.{js,jsx,ts,tsx}',
    '!malty/**/**/**.stories.{js,jsx,ts,tsx}',
    '!malty/theme/**',
    '!malty/utils/**'
  ]
};
