import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CheckboxCheck = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-9.659 8.214a1.111 1.111 0 00-1.571 1.572l3.555 3.555A1.111 1.111 0 0012 16.222l5.333-7.11a1.111 1.111 0 10-1.777-1.334l-4.565 6.086z" />
    </g>
  );

export default CheckboxCheck;
