import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const ToggleOn = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5a7 7 0 010 14H7A7 7 0 017 5zm0 11a4 4 0 100-8 4 4 0 000 8z" />
    </g>
  );

export default ToggleOn;
