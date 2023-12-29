import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const CarretUp = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15.5a.5.5 0 01-.354-.854l6-6a.5.5 0 01.708 0l6 6A.5.5 0 0118 15.5z" />
    </g>
  </BaseIcon>
);
