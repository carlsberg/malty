import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Draughtmaster = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5a4.5 4.5 0 014.5 4.5v7a4.5 4.5 0 11-9 0v-7A4.5 4.5 0 0112 5zm0 2a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 105 0v-7A2.5 2.5 0 0012 7zm2-4a1 1 0 110 2h-4a1 1 0 110-2z" />
    </g>
  </BaseIcon>
);

export default Draughtmaster;
