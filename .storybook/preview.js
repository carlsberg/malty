import {addParameters} from '@storybook/react';
import React from 'react';
import { GlobalStyle } from './styles';
import { MaltyThemeProvider } from '../malty/theme/MaltyThemeProvider';

 export const decorators = [
  (Story, context) => (
    <>
      <MaltyThemeProvider theme={context.globals.theme}>
        <GlobalStyle />
        <Story />
      </MaltyThemeProvider>
    </>
  ),
];

export const parameters = {
  docs: {
    viewMode: 'docs'
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'defaultTheme',
    toolbar: {
      items: [{value:'defaultTheme', title: 'Default'}, {value:'baltikaTheme', title: 'Baltika'}],
      showName: true,
    },
  },
};

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
