import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const CarretRight = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.5 6a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6A.5.5 0 018.5 18z" />
    </g>
  </BaseIcon>
);

export default CarretRight;
