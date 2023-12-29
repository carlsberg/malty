import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Filters = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 16a3 3 0 11-2.829 4H3a1 1 0 010-2h13.17A3.001 3.001 0 0119 16zm0 2a1 1 0 100 2 1 1 0 000-2zm-7-9c1.306 0 2.418.835 2.83 2H21a1 1 0 010 2h-6.171a3.001 3.001 0 01-5.664-.015l-.048.008L9 13H3a1 1 0 010-2h6c.057 0 .112.005.166.014A3 3 0 0112 9zm0 2a1 1 0 100 2 1 1 0 000-2zM5 2c1.306 0 2.418.835 2.83 2H21a1 1 0 010 2H7.829A3.001 3.001 0 115 2zm0 2a1 1 0 100 2 1 1 0 000-2z" />
    </g>
  </BaseIcon>
);
