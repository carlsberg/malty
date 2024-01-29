import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const AlertConnection = ({ dataTestId = 'icon-AlertConnection', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M16.185 2.634c1.251.387 2.428.983 3.472 1.756a8.63 8.63 0 012.42 2.692l.01.016.028.056-.038-.072a1.009 1.009 0 01.103.74 1.207 1.207 0 01-.08.216c-.021.039-.04.071-.061.102l-.004.006-9.207 13.415a.992.992 0 01-.076.099l-.092.092a.993.993 0 01-.201.137l.107-.064a1.007 1.007 0 01-.56.175h-.013a1.004 1.004 0 01-.653-.248l.094.073a.997.997 0 01-.262-.264L1.965 8.146a1.003 1.003 0 01-.051-1.048l.009-.016a8.616 8.616 0 012.411-2.685 11.567 11.567 0 013.48-1.762 14.119 14.119 0 018.37 0zm-7.78 1.912A9.588 9.588 0 005.517 6.01a6.63 6.63 0 00-1.528 1.548l8.01 11.675 8.012-11.675a6.66 6.66 0 00-1.537-1.555 9.573 9.573 0 00-2.88-1.458 12.121 12.121 0 00-7.19 0zM12 12a1 1 0 110 2 1 1 0 010-2zm0-6a1 1 0 011 1v2.95a1 1 0 01-2-.04V7a1 1 0 011-1z"
      fillRule="evenodd"
    />
  </BaseIcon>
);