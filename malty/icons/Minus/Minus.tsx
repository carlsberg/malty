import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Minus = ({ dataTestId = 'icon-Minus', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />
    </g>
  </BaseIcon>
);
