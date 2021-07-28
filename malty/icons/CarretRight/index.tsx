import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CarretRight = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.5 6a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6A.5.5 0 018.5 18z" />
    </g>
  );

export default CarretRight;
