import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const EyeFill = ({ dataTestId = 'icon-EyeFill', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M12 4c5.5 0 9.097 3.439 11 8-1.903 4.561-5.5 8-11 8s-9.097-3.439-11-8c1.903-4.561 5.5-8 11-8zm0 3c-2.767 0-5 2.233-5 5s2.233 5 5 5 5-2.233 5-5-2.233-5-5-5zm0 2c1.662 0 3 1.338 3 3s-1.338 3-3 3-3-1.338-3-3 1.338-3 3-3z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
