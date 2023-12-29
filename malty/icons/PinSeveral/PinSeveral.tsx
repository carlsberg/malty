import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const PinSeveral = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6.293 1.333a1 1 0 011.414 0l4 4A1 1 0 0112 6.04v3.08l2.782-2.786a1 1 0 011.321-.084l.095.084 5.49 5.5a1 1 0 01.292.706v9.61a1 1 0 01-2 0v-9.196l-4.49-4.498L11 12.954v9.196a1 1 0 01-2 0v-9.61a1 1 0 01.292-.706l.712-.714-.004-.08V6.454l-3-3-3 3v6.586a1 1 0 01-2 0v-7a1 1 0 01.293-.707z" />
    </g>
  </BaseIcon>
);
