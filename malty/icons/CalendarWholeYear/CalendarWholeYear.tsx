import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const CalendarWholeYear = ({ dataTestId = 'icon-CalendarWholeYear', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M17 1a1 1 0 01.993.883L18 2v1h2a3 3 0 012.995 2.823L23 6v12.167c0 1.988-1.172 3.714-2.827 3.827L20 22H4c-1.688 0-2.916-1.66-2.996-3.629L1 18.167V6a3 3 0 012.824-2.995L4 3h2V2a1 1 0 011.993-.117L8 2v1h8V2a1 1 0 011-1zM6 5H4a1 1 0 00-.993.883L3 6v12.167c0 1.008.476 1.742.918 1.825L4 20h16c.435 0 .937-.675.995-1.648l.005-.185V6c0-.513-.386-.936-.883-.994L20 5h-2v1a1 1 0 01-1.993.117L16 6.001V5H8v1a1 1 0 01-1.993.117L6 6.001zm3.81 2.407l.094.083 2.803 2.802a1 1 0 01.084 1.32l-.083.094-2.803 2.804a1 1 0 01-1.498-1.32l.083-.094L9.585 12H8.491a1.974 1.974 0 00-.147 3.943l.147.006H15.3a1.974 1.974 0 00.147-3.943L15.3 12a1 1 0 010-2 3.974 3.974 0 01.198 7.943l-.198.005H8.49a3.974 3.974 0 01-.198-7.944L8.491 10l1.094-.001L8.49 8.905a1 1 0 01-.083-1.32l.083-.095a1 1 0 011.32-.083z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
