import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Clone = ({ dataTestId = 'icon-Clone', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4a1 1 0 011 1v15a4 4 0 01-4 4H7a1 1 0 010-2h10a2 2 0 002-2V5a1 1 0 011-1zm-6-3a3 3 0 013 3v13a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3zm0 2H6a1 1 0 00-1 1v13a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1z" />
    </g>
  </BaseIcon>
);
