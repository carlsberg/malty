import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Edit = ({ dataTestId = 'icon-Edit', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M19 20a1 1 0 01.117 1.993L19 22H5a1 1 0 01-.117-1.993L5 20zM17.16 2.718c.828 0 1.622.33 2.237.946l.155.171a3.12 3.12 0 01-.185 4.212l-8.85 8.849a.99.99 0 01-.413.229l-4.748 1.81c-.807.307-1.598-.484-1.29-1.291L5.874 12.9a.995.995 0 01.259-.447l-.055.06a.98.98 0 01.026-.03l8.848-8.85a3.12 3.12 0 012.208-.915zM7.229 14.962L6.73 16.27l1.306-.5zM17.16 4.718a1.12 1.12 0 00-.793.33l-8.103 8.101 1.586 1.586 8.103-8.103c.15-.15.254-.338.3-.542l.022-.124.007-.126c0-.263-.093-.518-.233-.687l-.097-.106a1.12 1.12 0 00-.792-.329z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
