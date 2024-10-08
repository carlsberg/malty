import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const CalendarEvents = ({ dataTestId = 'icon-CalendarEvents', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M17 .722a1 1 0 01.993.884l.007.116v1h2a3 3 0 012.995 2.824l.005.176v7.961a6 6 0 01-8.7 8.04H4a3 3 0 01-2.995-2.825L1 18.722v-13a3 3 0 013-3h2v-1a1 1 0 011.993-.116L8 1.722v1h8v-1a1 1 0 011-1zM18 13a4 4 0 100 8 4 4 0 000-8zm3-1.198l-.001-2.08h-18v9a1 1 0 00.884.993l.117.007h8.652A6 6 0 0121 11.803zm-1.068 3.186a1 1 0 01.26 1.297l-.07.105-1.849 2.43a1 1 0 01-1.414.182l-.089-.08-1.374-1.373a1 1 0 011.32-1.498l.094.083.564.564 1.156-1.519a1 1 0 011.402-.19zM6 4.722H4a1 1 0 00-1 1l-.001 2h18v-2c0-.512-.386-.935-.883-.993L20 4.722h-2v1a1 1 0 01-1.993.117L16 5.722v-1H8v1a1 1 0 01-1.993.117L6 5.722z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
