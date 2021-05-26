module.exports = {
  extends: ['./../../../.eslintrc.js'],
  // Not a great solution, but for now we're disabling react/jsx-props-no-spreading and react/destructuring-assignment eslint rules
  overrides: [
    {
      files: ['**/*'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off'
      }
    }
  ]
};
