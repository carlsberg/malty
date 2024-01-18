import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Information = ({ dataTestId = 'icon-Information', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 8.09a1 1 0 011 1V17a1 1 0 01-2 0v-5.91a1 1 0 011-1zM12 6a1 1 0 110 2 1 1 0 010-2z" />
    </g>
  </BaseIcon>
);
