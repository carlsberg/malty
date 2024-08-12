import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const ChevronUp = ({ dataTestId = 'icon-ChevronUp', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 10.414l5.293 5.293a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.414 0l-6 6a1 1 0 001.414 1.414z" />
    </g>
  </BaseIcon>
);
