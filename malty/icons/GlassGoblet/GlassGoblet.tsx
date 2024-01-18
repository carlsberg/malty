import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const GlassGoblet = ({ dataTestId = 'icon-GlassGoblet', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16 2a1 1 0 011 1v6.021a7.425 7.425 0 011 3.809 6.002 6.002 0 01-5 5.917V21h2a1 1 0 01.993.883L16 22a1 1 0 01-1 1H9a1 1 0 010-2h2v-2.253a6 6 0 01-5-5.911 7.601 7.601 0 011-3.811V3a1 1 0 011-1zm-1 2H9v5.3a1 1 0 01-.152.53 5.605 5.605 0 00-.848 3 4 4 0 108-.013 5.44 5.44 0 00-.845-2.982A1 1 0 0115 9.3z" />
    </g>
  </BaseIcon>
);
