module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', './malty'],
  moduleNameMapper: {
    '^@atoms/(.*)$': './malty/atoms/$1',
    '^@molecules/(.*)$': './malty/molecules/$1',
    '^@organisms/(.*)$': './malty/organisms/$1',
    '^@utils/(.*)$': './malty/utils/$1',
    '^@theme/(.*)$': './malty/theme/$1',
    '^@icons/(.*)$': './malty/icons/$1'
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
};
