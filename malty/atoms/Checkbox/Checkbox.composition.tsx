import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Checkbox } from './Checkbox';

export const BasicCheckbox = () => (
  <MaltyThemeProvider theme="global">
    <Checkbox value="Test" checked onValueChange={() => null} />
  </MaltyThemeProvider>
);
