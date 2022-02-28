import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CarretUp = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15.5a.5.5 0 01-.354-.854l6-6a.5.5 0 01.708 0l6 6A.5.5 0 0118 15.5z" />
    </g>
  );

export default CarretUp;
