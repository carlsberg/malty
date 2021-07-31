/* eslint-disable no-console */
import React from 'react';
import { Icon } from './Icon';
import { Colors, NamesTypes, SizesTypes } from './Icon.types';

export const BasicIcon = () => <Icon name={NamesTypes.AddContent} color={Colors.Primary} size={SizesTypes.Small} />;

export const ClickableIcon = () => (
  <Icon
    name={NamesTypes.AddContent}
    color={Colors.Primary}
    size={SizesTypes.Small}
    onClick={() => {
      console.log('Just got clicked!');
    }}
  />
);
