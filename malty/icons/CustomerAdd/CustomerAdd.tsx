import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const CustomerAdd = ({ dataTestId = 'icon-CustomerAdd', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 2a5 5 0 012.398 9.389c3.18 1.06 5.494 4.18 5.598 7.874l.004.26v1.914a1 1 0 01-1.994.117L15 21.437v-1.915C15 15.905 12.296 13 9 13c-3.223 0-5.88 2.779-5.996 6.283l-.004.24v1.915a1 1 0 01-1.994.117L1 21.437v-1.915c0-3.806 2.347-7.046 5.601-8.134A5 5 0 019 2zm10.39 3.636a1 1 0 01.992.883l.007.117v2.29h2.291a1 1 0 01.117 1.994l-.117.007-2.291-.001v2.293a1 1 0 01-1.993.116l-.007-.116v-2.293h-2.292a1 1 0 01-.116-1.993l.116-.006 2.292-.001v-2.29a1 1 0 011-1zM9 4a3 3 0 100 6 3 3 0 000-6z" />
    </g>
  </BaseIcon>
);
