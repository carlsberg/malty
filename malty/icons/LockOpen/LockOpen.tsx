import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const LockOpen = ({ dataTestId = 'icon-LockOpen', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M11.974 1a5 5 0 014.995 4.783l.005.217v.43a1 1 0 01-1.993.117l-.007-.117V6a3 3 0 00-5.995-.176L8.974 6v4.43H20a1 1 0 01.993.883l.007.117v9.596a1 1 0 01-1 1H4a1 1 0 01-1-1V11.43a1 1 0 011-1h2.974V6a5 5 0 015-5zM7.941 12.428L5 12.43v7.596h14v-7.596H8.008l-.034.001zm4.033 1.624A1.975 1.975 0 1111.973 18a1.975 1.975 0 010-3.95z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
