import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Overlay } from '.';

export const BasicOverlay = () => {
  return (
    <MaltyThemeProvider theme="global">
      <Overlay />
    </MaltyThemeProvider>
  );
};
