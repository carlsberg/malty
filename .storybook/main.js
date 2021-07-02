module.exports = {
  stories: [
    "welcome.stories.mdx",
    "../malty/**/**/*.stories.mdx",
    "../malty/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [{
    name: '@storybook/addon-links',
    name: '@storybook/addon-essentials',
    options: {
      // actions: false,
    }
  }],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}