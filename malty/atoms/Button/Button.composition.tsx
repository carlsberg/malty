import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Button } from './Button';
import { ButtonStyle } from './Button.types';

export const PrimaryButton = () => (
  <MaltyThemeProvider theme="global">
    <Button style={ButtonStyle.Primary} text="Primary button" />
  </MaltyThemeProvider>
);

export const SecondaryButton = () => (
  <MaltyThemeProvider theme="global">
    <Button style={ButtonStyle.Secondary} text="Secondary button" />
  </MaltyThemeProvider>
);

export const FloaterButton = () => (
  <MaltyThemeProvider theme="global">
    <Button style={ButtonStyle.Floater} icon={IconNamesTypes.ArrowSmallUp} />
  </MaltyThemeProvider>
);

export const LinkButton = () => (
  <MaltyThemeProvider theme="global">
    <Button style={ButtonStyle.Link} text="Link button" />
  </MaltyThemeProvider>
);
