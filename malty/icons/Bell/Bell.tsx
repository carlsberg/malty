import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Bell = ({ dataTestId = 'icon-Bell', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0a1 1 0 011 1l.001.982A8.001 8.001 0 0120 9.92V18h1a1 1 0 01.993.883L22 19a1 1 0 01-1 1l-5 .001a4 4 0 01-8-.071l.001.07H3a1 1 0 01-.993-.883L2 19a1 1 0 011-1h1V9.92a8.001 8.001 0 017-7.938V1a1 1 0 011-1zm1.997 20l-3.996.001A2 2 0 0014 19.93zM12 3.92a6 6 0 00-6 6V18h12V9.92a6 6 0 00-5.775-5.996z" />
    </g>
  </BaseIcon>
);
