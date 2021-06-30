import React from 'react';
import { Icon } from './Icon';
import { ColorsTypes, NamesTypes, SizesTypes } from './Icon.types';

export const BasicIcon = () => (
  <Icon name={NamesTypes.AddContent} color={ColorsTypes.Primary} size={SizesTypes.Small} />
);
