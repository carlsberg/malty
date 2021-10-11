import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CarretLeft = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 18a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6A.5.5 0 0115.5 6z" />
    </g>
  );

export default CarretLeft;
