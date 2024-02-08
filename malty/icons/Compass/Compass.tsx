import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Compass = ({ dataTestId = 'icon-Compass', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6.625 21.982c-.77.616-1.874-.137-1.58-1.08l6.002-19.2c.292-.936 1.616-.936 1.908 0l6.001 19.2c.295.943-.808 1.696-1.579 1.08l-5.376-4.301zm9.446-3.606l-4.07-13.024-4.07 13.024 3.445-2.757a1 1 0 011.25 0z" />
    </g>
  </BaseIcon>
);
