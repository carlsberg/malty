import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Pallet = ({ dataTestId = 'icon-Pallet', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M20 2a3 3 0 013 3v16a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3h-2v3a1 1 0 01-.883.993L14 22h-4a1 1 0 01-1-1v-3H7v3a1 1 0 01-.883.993L6 22H2a1 1 0 01-1-1V5a3 3 0 013-3zM5 18H3v2h2zm8 0h-2v2h2zm8 0h-2v2h2zM7 4H4a1 1 0 00-1 1v11h18V5a1 1 0 00-.883-.993L20 4h-3v4a1 1 0 01-1.993.117L15 8V4H9v4a1 1 0 01-1.993.117L7 8z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
