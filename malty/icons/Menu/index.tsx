import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Menu = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M23 18a1 1 0 010 2H1a1 1 0 010-2zm0-7a1 1 0 010 2H1a1 1 0 110-2zm0-7a1 1 0 010 2H1a1 1 0 110-2z" />
    </g>
  );

export default Menu;
