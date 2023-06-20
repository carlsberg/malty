const path = require('path');
module.exports = {
  stories: ['../malty/**/**/*.stories.mdx', '../malty/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // '@storybook/addon-storysource',
    {
      name: '@storybook/addon-links',
      name: '@storybook/addon-essentials'
      // name: '@storybook/addon-storysource'
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.jsx?$/], // This is default
          include: [path.resolve(__dirname, '../malty/**/**/*.stories.@(js|jsx|ts|tsx)')]
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
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
  staticDirs: [{ from: '../public/storybook', to: '/' }],
  previewHead: (head) => `
    ${head}
    <style>
      div.docs-story > div:first-child > div:first-child {
        width: 100% !important;
      }
      button.docblock-code-toggle {
        display: none !important;
      }
    </style>
  `
};
