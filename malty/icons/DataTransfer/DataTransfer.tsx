import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const DataTransfer = ({ dataTestId = 'icon-DataTransfer', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M16 2a1 1 0 01.117 1.993L16 4H7a1 1 0 00-.993.883L6 5v14a1 1 0 00.883.993L7 20h9a1 1 0 01.117 1.993L16 22H7a3 3 0 01-2.995-2.824L4 19V5a3 3 0 012.824-2.995L7 2zm-4 13a1 1 0 01.117 1.993L12 17H9a1 1 0 01-.117-1.993L9 15zm5.293-6.667a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414zM12 11a1 1 0 01.117 1.993L12 13H9a1 1 0 01-.117-1.993L9 11zm0-4a1 1 0 01.117 1.993L12 9H9a1 1 0 01-.117-1.993L9 7z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
