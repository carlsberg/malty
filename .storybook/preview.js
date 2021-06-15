import {addParameters} from '@storybook/react';


export const parameters = {
  docs: {
    viewMode: 'docs'
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
  
}

addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' }, 
      { name: 'gray', value: '#c1c1c1' },
      { name: 'black', value: '#333333' },
    ]
  }
});
