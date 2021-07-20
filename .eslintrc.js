/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

// code taken from https://github.com/airbnb/javascript/issues/2032#issuecomment-568934232
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off';
  return acc;
}, {});

module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'jest', 'testing-library'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.{ts,tsx}',
          '**/*.test.{ts,tsx}',
          '**/{test,mockServer}/*.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
          'jest-setup.ts',
          'webpack.config.js',
          'malty/utils/test.tsx'
        ]
      }
    ],
    'import/prefer-default-export': 'off',

    // I don't think we need to type this. Typescript is pretty good at inferring the types and we can also use ReturnType<typeof fn> to get the inferred return type. As such, I don't think this is worth it
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // no-shadow is not compatible with typescript. see: https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // disable console unless warnings and errors
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Disable accessability rules - this would be a huge undertaking and, as discussed on the frontend leads meeting is not, currently, a requirement. New apps or the design system should probably have this on
    ...a11yOff,

    // Commenting this out until we fix the issue with the api state reference
    // changing with every update to the API reducer state
    // Also: https://github.com/facebook/react/issues/20204
    // 'react-hooks/exhaustive-deps': 'error'

    'no-underscore-dangle': ['error', { allow: ['_embedded', '_links'] }],

    /**
     * React testing library - specific rules
     */
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error'
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.md', '**/*.mdx'], // Or *.test.js
      rules: {
        // The recommended way to write storybook stories is using props spreading
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off'
      }
    }
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx']
      }
    },
    jest: {
      version: 26
    }
  }
};
