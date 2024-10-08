import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Truck = ({ dataTestId = 'icon-Truck', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4a3 3 0 013 3v1h1a4 4 0 013.995 3.8L23 12v3a1 1 0 01-1 1h-1.17a3 3 0 11-5.659 0H9.829a3 3 0 11-5.659 0H3a1 1 0 01-1-1V7a3 3 0 013-3zM7 16a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2zM15 6H5a1 1 0 00-1 1v7h12V7a1 1 0 00-.883-.993zm4 4h-1v4h3v-2a2 2 0 00-1.85-1.995z" />
    </g>
  </BaseIcon>
);
