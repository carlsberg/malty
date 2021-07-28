import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Button } from './Button';
import { ButtonType } from './Button.types';

export const PrimaryButton = () => (
  <MaltyThemeProvider theme="global">
    <Button buttonType={ButtonType.Primary} text="Primary button" />
  </MaltyThemeProvider>
);

export const SecondaryButton = () => (
  <MaltyThemeProvider theme="global">
    <Button buttonType={ButtonType.Secondary} text="Secondary button" />
  </MaltyThemeProvider>
);

export const FloaterButton = () => (
  <MaltyThemeProvider theme="global">
    <Button buttonType={ButtonType.Floater} icon={IconNamesTypes.ArrowSmallUp} />
  </MaltyThemeProvider>
);

export const LinkButton = () => (
  <MaltyThemeProvider theme="global">
    <Button buttonType={ButtonType.Link} text="Link button" />
  </MaltyThemeProvider>
);
