import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Pill } from './Pill';

export const BasicPill = () => {
  return (
    <MaltyThemeProvider theme="global">
      <Pill text="Pill text" />
    </MaltyThemeProvider>
  );
};
