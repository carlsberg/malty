import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Minus = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />
    </g>
  </BaseIcon>
);

export default Minus;
