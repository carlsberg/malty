module.exports = {
  stories: [
    "welcome.stories.mdx",
    "../base/**/**/*.stories.mdx",
    "../base/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [{
    name: '@storybook/addon-links',
    name: '@storybook/addon-essentials',
    options: {
      // actions: false,
    }
  }]
}