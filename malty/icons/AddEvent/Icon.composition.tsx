import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Colors, SizesTypes } from './Icon.types';
// eslint-disable-next-line import/no-named-default
import { default as Icon } from './index';

export const BasicIcon = () => (
  <MaltyThemeProvider theme="global">
    <Icon color={Colors.Primary} size={SizesTypes.Small} />
  </MaltyThemeProvider>
);
