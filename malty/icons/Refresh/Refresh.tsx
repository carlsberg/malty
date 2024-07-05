import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Refresh = ({ dataTestId = 'icon-Refresh', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M4.775 4.79A9.5 9.5 0 0121 11.5l-.002-.092 1.115-1.115a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-2.8 2.8a1 1 0 01-1.413.001l-2.81-2.8a1 1 0 011.412-1.416l1.083 1.077A7.5 7.5 0 1011.518 19a1 1 0 11.004 2A9.5 9.5 0 014.775 4.79z" />
    </g>
  </BaseIcon>
);
