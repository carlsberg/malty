import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Button } from './Button';
import { ButtonType } from './Button.types';

export const BasicButton = () => (
  <MaltyThemeProvider theme="global">
    <Button buttonType={ButtonType.Primary} text="Clickable button" />
  </MaltyThemeProvider>
);
