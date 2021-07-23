import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Checkbox } from './Checkbox';

export const CheckedCheckbox = () => (
  <MaltyThemeProvider theme="global">
    <Checkbox value="Checked checkbox" checked onValueChange={() => null} />
  </MaltyThemeProvider>
);

export const UnckeckedCheckbox = () => (
  <MaltyThemeProvider theme="global">
    <Checkbox value="Unchecked checkbox" checked={false} onValueChange={() => null} />
  </MaltyThemeProvider>
);
