import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Menu = ({ dataTestId = 'icon-Menu', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M23 18a1 1 0 010 2H1a1 1 0 010-2zm0-7a1 1 0 010 2H1a1 1 0 110-2zm0-7a1 1 0 010 2H1a1 1 0 110-2z" />
    </g>
  </BaseIcon>
);
