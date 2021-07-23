import { addParameters } from '@storybook/react';
import React from 'react';
import { GlobalStyle } from './styles';
// import { MaltyThemeProvider } from '../malty/theme/MaltyThemeProvider';
import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';

export const decorators = [
  (Story, context) => (
    <>
      <MaltyThemeProvider theme={context.globals.theme}>
        <GlobalStyle />
        <Story />
      </MaltyThemeProvider>
    </>
  )
];

export const parameters = {
  viewMode: 'docs',
  previewTabs: { canvas: { hidden: false } },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'global',
    toolbar: {
      items: [
        { value: 'global', title: 'Global' },
        { value: 'baltika', title: 'Baltika' },
        { value: 'cadi', title: 'Cadi' },
        { value: 'carlsberg', title: 'Carlsberg' },
        { value: 'lbc', title: 'LBC' }
      ],
      showName: true
    }
  }
};

addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'gray', value: '#c1c1c1' },
      { name: 'black', value: '#333333' }
    ]
  }
});
