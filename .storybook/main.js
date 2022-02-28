module.exports = {
  stories: ['../malty/**/**/*.stories.mdx', '../malty/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-links',
      name: '@storybook/addon-essentials'
    }
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: false,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  },
  core: {
    builder: 'webpack5'
  },
  staticDirs: [{ from: '../public/storybook', to: '/' }]
};
