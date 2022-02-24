import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Clock = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2.5a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2.17a1 1 0 011 1V12h2a1 1 0 01.993.883L16 13a1 1 0 01-1 1h-3a1 1 0 01-1-1V7.67a1 1 0 011-1z" />
    </g>
  );

export default Clock;
