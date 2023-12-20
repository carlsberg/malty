import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const MenuRight = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M23 18a1 1 0 010 2h-6a1 1 0 010-2zm0-7a1 1 0 010 2H9a1 1 0 110-2zm0-7a1 1 0 010 2H1a1 1 0 110-2z" />
    </g>
  </BaseIcon>
);

export default MenuRight;
