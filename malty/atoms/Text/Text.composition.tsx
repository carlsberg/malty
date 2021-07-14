import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Text } from './Text';

export const BasicText = () => (
  <MaltyThemeProvider theme="global">
    <Text content="this is a text block" />
  </MaltyThemeProvider>
);
