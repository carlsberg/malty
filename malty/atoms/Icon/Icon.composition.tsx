import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { Icon } from './Icon';
import { Colors, NamesTypes, SizesTypes } from './Icon.types';

export const BasicIcon = () => (
  <MaltyThemeProvider theme="defaultTheme">
    <Icon name={NamesTypes.AddContent} color={Colors.Primary} size={SizesTypes.Small} />
  </MaltyThemeProvider>
);
