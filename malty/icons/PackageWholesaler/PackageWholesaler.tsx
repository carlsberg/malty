import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const PackageWholesaler = ({ dataTestId = 'icon-PackageWholesaler', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5 1a1 1 0 011 1v15h1V4a1 1 0 011-1h9a1 1 0 011 1v13h1a1 1 0 01.993.883L20 18a1 1 0 01-1 1h-7.17a3 3 0 11-5.659 0H5a1 1 0 01-1-1V3H3a1 1 0 110-2zm4 18a1 1 0 100 2 1 1 0 000-2zm3-7H9v5h7v-5h-2v1a1 1 0 01-.883.993L13 14a1 1 0 01-1-1zm4-7h-2v1a1 1 0 01-.883.993L13 7a1 1 0 01-1-1V5H9v5h7z" />
    </g>
  </BaseIcon>
);
