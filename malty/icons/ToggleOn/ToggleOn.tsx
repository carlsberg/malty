import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ToggleOn = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5a7 7 0 010 14H7A7 7 0 017 5zm0 11a4 4 0 100-8 4 4 0 000 8z" />
    </g>
  </BaseIcon>
);
