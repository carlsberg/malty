import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Bold = ({ dataTestId = 'icon-Bold', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M7.5 19a1.5 1.5 0 01-.144-2.993L7.5 16h.247V7H7.5a1.5 1.5 0 01-.144-2.993L7.5 4h7a4.5 4.5 0 013.353 7.501A4.5 4.5 0 0114.5 19zm7.144-5.993L14.5 13h-3.753v3H14.5a1.5 1.5 0 00.144-2.993zM14.5 7h-3.753v3H14.5a1.5 1.5 0 00.144-2.993z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
