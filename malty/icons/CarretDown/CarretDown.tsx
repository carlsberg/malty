import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const CarretDown = ({ dataTestId = 'icon-CarretDown', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 8.5a.5.5 0 01.354.854l-6 6a.5.5 0 01-.708 0l-6-6A.5.5 0 016 8.5z" />
    </g>
  </BaseIcon>
);
