import React from 'react';
import * as Icons from './icon';
import { ColorsTypes, NamesTypes, SizesTypes } from './icon.types';

// sets the Component preview in gallery view
export const BasicIcon = () => {
  return (
    <Icons.AddContent
      name={NamesTypes.AddContent}
      color={ColorsTypes.Primary}
      size={SizesTypes.Small}
    />
  );
};
