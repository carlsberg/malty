import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const ItemCheck = ({ dataTestId = 'icon-ItemCheck', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c1.786 0 3.519.391 5.101 1.135a1 1 0 01-.851 1.81A9.957 9.957 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.947 9.947 0 00-1.501-5.273 1 1 0 011.698-1.056A11.947 11.947 0 0124 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm7.26 1.951a1 1 0 011.6 1.2L12 15.8a1 1 0 01-1.507.107L6.604 12a1 1 0 011.414-1.414l3.074 3.092z" />
    </g>
  </BaseIcon>
);
