import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Diploma = ({ dataTestId = 'icon-Diploma', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M16 2a1 1 0 01.117 1.993L16 4H7a1 1 0 00-.993.883L6 5v14a1 1 0 00.883.993L7 20h9a1 1 0 01.117 1.993L16 22H7a3 3 0 01-2.995-2.824L4 19V5a3 3 0 012.824-2.995L7 2zm0 3a4 4 0 013.032 6.61l-.002 6.18c0 .852-.986 1.297-1.623.783l-.084-.076-1.353-1.352-1.293 1.292c-.602.603-1.614.22-1.701-.593l-.006-.114-.002-6.12A4 4 0 0116 5zm1.03 7.866a4.006 4.006 0 01-2.06 0l-.001 2.449.294-.292a1 1 0 011.32-.083l.094.083.353.352zM16 7a2 2 0 100 4 2 2 0 000-4z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
