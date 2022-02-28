import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const MediaPause = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 7a1 1 0 01.993.883L10 8v8a1 1 0 01-1.993.117L8 16V8a1 1 0 011-1zm6 0a1 1 0 01.993.883L16 8v8a1 1 0 01-1.993.117L14 16V8a1 1 0 011-1z" />
    </g>
  );

export default MediaPause;
