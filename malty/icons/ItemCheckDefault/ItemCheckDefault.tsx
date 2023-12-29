import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ItemCheckDefault = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.2 6.2a1 1 0 111.6 1.2L12 15.8a1 1 0 01-1.507.107l-3.2-3.2a1 1 0 011.414-1.414l2.385 2.385z" />
    </g>
  </BaseIcon>
);
