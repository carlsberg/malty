import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { defaultTheme, NewMaltyThemeProvider } from '@carlsberggroup/malty.theme.new-malty-theme-provider';
import { Controls, Description, DocsContainer, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import React from 'react';
import styled from 'styled-components';
import { ImportPath } from './importPath';
import { InfoComponent } from './infoComponent';
import maltyTheme from './maltyTheme';
import { StoryToggle } from './storyToggle';
import { ThemedComponent } from './themedComponent';

const params = new URLSearchParams(window.location.search);
const plain = params.get('plain');
const options = params.get('options');

export const decorators = [
  (Story, context) => (
    <MaltyThemeProvider theme={context.globals.theme}>
      <NewMaltyThemeProvider theme={defaultTheme}>
        <Story />
      </NewMaltyThemeProvider>
    </MaltyThemeProvider>
  )
];

const StyledDocsContainer = styled.div`
  .sbdocs-content {
    max-width: 846px;
  }
  .sbdocs-wrapper {
    padding: 0;
  }
  .sbdocs-preview {
    margin: 0;
  }
`;

export const parameters = {
  viewMode: 'docs',
  layout: 'centered',
  controls: { expanded: true },
  previewTabs: {
    canvas: {
      hidden: true
    },
    'storybook/docs/panel': {
      hidden: false,
      title: 'Code'
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    isToolshown: true
  },
  docs: {
    theme: maltyTheme,
    source: { code: '' },
    container: ({ children, ...rest }) =>
      (!plain && !options && (
        <DocsContainer {...rest}>
          <Title />
          <Subtitle />
          <ThemedComponent />
          <Description />
          <ImportPath />
          <Primary />
          <StoryToggle />
          <InfoComponent />
          <Controls />
          <Stories />
        </DocsContainer>
      )) ||
      (plain && (
        <StyledDocsContainer>
          <DocsContainer {...rest}>
            <Primary />
          </DocsContainer>
        </StyledDocsContainer>
      )) ||
      (options && (
        <StyledDocsContainer>
          <DocsContainer {...rest}>
            <Primary />
            <InfoComponent />
            <Controls />
          </DocsContainer>
        </StyledDocsContainer>
      ))
  },
  controls: {
    matchers: {
      date: /Date$/
    }
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
    description: 'Global theme for components',
    defaultValue: 'global',
    toolbar: {
      title: 'Theme',
      items: [
        { value: 'global', title: 'Global' },
        { value: 'cadi', title: 'Cadi' },
        { value: 'carlsberg', title: 'Carlsberg' },
        { value: 'lbc', title: 'LBC' }
      ]
    }
  }
};
