import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Search = ({ dataTestId = 'icon-Search', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.54 4a6.54 6.54 0 0 1 5.278 10.403l3.97 3.97a1 1 0 0 1-1.32 1.497l-.095-.083-3.97-3.97A6.54 6.54 0 1 1 10.54 4zm0 2a4.54 4.54 0 1 0 0 9.08 4.54 4.54 0 0 0 0-9.08z"
    />
  </BaseIcon>
);
