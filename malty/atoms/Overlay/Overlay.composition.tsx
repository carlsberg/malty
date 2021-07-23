import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Overlay } from '.';

export const BasicOverlay = () => (
  <MaltyThemeProvider theme="global">
    <Overlay />
  </MaltyThemeProvider>
);
