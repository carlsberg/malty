/* eslint-disable no-console */
import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Icon } from './Icon';
import { Colors, NamesTypes, SizesTypes } from './Icon.types';

export const BasicIcon = () => (
  <MaltyThemeProvider theme="global">
    <Icon name={NamesTypes.AddContent} color={Colors.Primary} size={SizesTypes.Small} />
  </MaltyThemeProvider>
);

export const ClickableIcon = () => (
  <MaltyThemeProvider theme="global">
    <Icon
      name={NamesTypes.AddContent}
      color={Colors.Primary}
      size={SizesTypes.Small}
      onClick={() => {
        console.log('Just got clicked!');
      }}
    />
  </MaltyThemeProvider>
);
