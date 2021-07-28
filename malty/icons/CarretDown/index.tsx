import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CarretDown = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 8.5a.5.5 0 01.354.854l-6 6a.5.5 0 01-.708 0l-6-6A.5.5 0 016 8.5z" />
    </g>
  );

export default CarretDown;
