import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const CalendarConfirm = ({ dataTestId = 'icon-CalendarConfirm', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M17 1a1 1 0 01.993.883L18 2v1h2a3 3 0 012.995 2.824L23 6v13a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h2V2a1 1 0 011.993-.117L8 2v1h8V2a1 1 0 011-1zm4 9H3v9a1 1 0 00.883.993L4 20h16a1 1 0 001-1zm-5.294 2.204a1 1 0 01.26 1.297l-.07.105-3.5 4.6a1 1 0 01-1.414.18l-.09-.079-2.6-2.6a1 1 0 011.32-1.497l.095.083 1.791 1.79 2.806-3.689a1 1 0 011.402-.19zM6 5H4a1 1 0 00-1 1v2h18V6a1 1 0 00-.883-.993L20 5h-2v1a1 1 0 01-1.993.117L16 6V5H8v1a1 1 0 01-1.993.117L6 6z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
