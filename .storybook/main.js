module.exports = {
  stories: [
    "welcome.stories.mdx",
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [{
    name: '@storybook/addon-links',
    name: '@storybook/addon-essentials',
    options: {
      // actions: false,
    }
  }]
}