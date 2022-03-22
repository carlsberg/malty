import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const PinInactive = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.004 2.04a5 5 0 012.387 9.394c3.372 1.142 5.742 4.385 5.611 8.096v1.91a1 1 0 11-2 0l.001-1.945c.121-3.46-2.579-6.365-5.961-6.496a6.278 6.278 0 00-6.037 6.571v1.91a1 1 0 11-1.999 0v-1.87A8.281 8.281 0 012.2 13.654a8.22 8.22 0 013.426-2.215A5 5 0 018.004 2.04zm8.29 3.293a1 1 0 011.415 0L20 7.625l2.292-2.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L21.415 9.04l2.292 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-2.292-2.293-2.292 2.293a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l2.291-2.293-2.291-2.293a1 1 0 01-.083-1.32zM8.005 4.04a3 3 0 100 6 3 3 0 000-6z" />
    </g>
  );

export default PinInactive;
