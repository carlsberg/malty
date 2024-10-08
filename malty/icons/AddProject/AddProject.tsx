import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const AddProject = ({ dataTestId = 'icon-AddProject', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M6.458 1.94l7.55.06a.999.999 0 01.798.408l5.954 5.838c.24.236.337.564.287.874l-.117 4.904a1 1 0 01-1.996.069l-.004-.117.095-3.976H16a3 3 0 01-2.995-2.824L13 7V3.991L6.446 3.94a1.38 1.38 0 00-1.379 1.236l-.007.133-.12 13.215a1.38 1.38 0 001.24 1.379l.133.007 6.7.09a1 1 0 01.09 1.995l-.116.005-6.695-.09a3.38 3.38 0 01-3.348-3.214l-.004-.185.12-13.22a3.38 3.38 0 013.213-3.347zM17 14a1 1 0 01.993.883L18 15l-.001 1.999L20 17a1 1 0 01.117 1.993L20 19l-2.001-.001L18 21a1 1 0 01-1.993.117L16 21l-.001-2.001L14 19a1 1 0 01-.117-1.993L14 17l1.999-.001L16 15a1 1 0 011-1zm-2.001-8.6L15 7a1 1 0 00.883.993L16 8l1.651-.001z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
