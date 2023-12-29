import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ChevronRight = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M13.586 12l-5.293 5.293a1 1 0 001.414 1.414L16.414 12 9.707 5.293a1 1 0 00-1.414 1.414z" />
    </g>
  </BaseIcon>
);
