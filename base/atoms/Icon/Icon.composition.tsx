import React from 'react';
import { Icon } from './Icon';
import { ColorsTypes, NamesTypes, SizesTypes } from './Icon.types';

// sets the Component preview in gallery view
export const BasicIcon = () => (
  <Icon name={NamesTypes.AddContent} color={ColorsTypes.Primary} size={SizesTypes.Small} />
);
