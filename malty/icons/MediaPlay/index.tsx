import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const MediaPlay = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.5 18l.006.136c.1 1.2 1.534 1.794 2.455 1.017l.024-.024 7.969-5.975.107-.093a1.5 1.5 0 000-2.122l-.107-.093L9.985 4.87l.076.07C9.116 3.993 7.5 4.663 7.5 6zm2-10.994L16.158 12 9.5 16.993z" />
    </g>
  );

export default MediaPlay;
