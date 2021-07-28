import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Minus = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />
    </g>
  );

export default Minus;
