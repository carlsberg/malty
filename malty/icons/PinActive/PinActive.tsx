import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const PinActive = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.006 2.04a5 5 0 012.389 9.394c3.371 1.142 5.742 4.385 5.611 8.096v1.91a1 1 0 11-2 0v-1.945c.122-3.46-2.579-6.365-5.962-6.496a6.28 6.28 0 00-4.375 2.012 6.308 6.308 0 00-1.663 4.559v1.91a1 1 0 01-2 0v-1.87a8.28 8.28 0 012.195-5.957 8.221 8.221 0 013.425-2.215 5 5 0 012.38-9.398zm14.19 3.4a1 1 0 111.6 1.2l-3.99 5.33a1 1 0 01-1.507.107l-2.67-2.67a1 1 0 011.414-1.414l1.854 1.854zm-14.19-1.4a3 3 0 100 6 3 3 0 000-6z" />
    </g>
  </BaseIcon>
);
