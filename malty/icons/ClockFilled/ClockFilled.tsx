import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const ClockFilled = ({ dataTestId = 'icon-ClockFilled', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2.5a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm0 4.17a1 1 0 00-1 1V13l.007.117A1 1 0 0012 14h3l.117-.007A1 1 0 0016 13l-.007-.117A1 1 0 0015 12l-2-.001V7.67l-.007-.117A1 1 0 0012 6.67z" />
    </g>
  </BaseIcon>
);
