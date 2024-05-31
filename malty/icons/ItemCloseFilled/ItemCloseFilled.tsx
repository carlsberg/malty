import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const ItemCloseFilled = ({ dataTestId = 'icon-ItemCloseFilled', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.613 7.21a1 1 0 00-1.32.083l-.083.094a1 1 0 00.083 1.32L10.585 12l-3.292 3.293-.083.094a1 1 0 00.083 1.32l.094.083a1 1 0 001.32-.083L12 13.415l3.293 3.292.094.083a1 1 0 001.32-.083l.083-.094a1 1 0 00-.083-1.32L13.415 12l3.292-3.293.083-.094a1 1 0 00-.083-1.32l-.094-.083a1 1 0 00-1.32.083L12 10.585 8.707 7.293z" />
    </g>
  </BaseIcon>
);
