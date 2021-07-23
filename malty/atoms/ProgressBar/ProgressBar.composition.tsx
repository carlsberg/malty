import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { ProgressBar } from './ProgressBar';

export const BasicProgressBar = () => (
  <MaltyThemeProvider theme="global">
    <ProgressBar progress={25} displayAmount={false} label="Loading data..." />
  </MaltyThemeProvider>
);
