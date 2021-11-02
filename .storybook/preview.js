import React from 'react';
import { ImportPath } from './importPath';
import { ArgsTable, Description, Primary, Stories, Subtitle, Title, PRIMARY_STORY } from '@storybook/addon-docs';
import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';

export const decorators = [
  (Story, context) => (
    <MaltyThemeProvider theme={context.globals.theme}>
      <Story />
    </MaltyThemeProvider>
  )
];

export const parameters = {
  viewMode: 'docs',
  controls: { expanded: true },
  previewTabs: { canvas: { hidden: false } },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ImportPath />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    )
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    showNav: true,
    enableShortcuts: true
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'gray', value: '#c1c1c1' },
      { name: 'black', value: '#333333' }
    ]
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
