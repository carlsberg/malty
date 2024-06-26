import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Italic = ({ dataTestId = 'icon-Italic', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M16.002 5a1 1 0 01.116 1.993L16.003 7H13.83l-1.662 10h1.815a1 1 0 01.116 1.993l-.116.007H7.998a1 1 0 01-.116-1.993L7.997 17h2.147l1.662-10h-1.79a1 1 0 01-.116-1.993L10.017 5z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
