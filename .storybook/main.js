import { dirname, join } from 'path';

module.exports = {
  stories: ['../malty/!(icons)/!(IconWrapper)/*.stories.@(mdx|js|jsx|ts|tsx)'],

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
  `,

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
