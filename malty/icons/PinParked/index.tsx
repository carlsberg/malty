import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const PinParked = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M22 1.04a1 1 0 011 1v20a1 1 0 01-1 1H2a1 1 0 01-1-1v-20a1 1 0 011-1zm-1 2H3v18h18zM15 11a1 1 0 010 2H9a1 1 0 010-2z" />
    </g>
  </BaseIcon>
);

export default PinParked;
