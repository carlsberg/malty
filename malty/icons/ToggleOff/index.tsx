import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const ToggleOff = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5a7 7 0 010 14H7A7 7 0 017 5zm0 2H7a5 5 0 00-.217 9.995L7 17h10a5 5 0 00.217-9.995zM7 16a4 4 0 100-8 4 4 0 000 8z" />
    </g>
  );

export default ToggleOff;