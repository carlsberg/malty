import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const CheckboxEmpty = ({ dataTestId = 'icon-CheckboxEmpty', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
