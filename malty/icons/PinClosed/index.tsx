import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const PinClosed = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.386 1.16a1 1 0 011.228 0l9 7a1 1 0 01.386.79v13a1 1 0 01-2 0V9.44l-8-6.223-8 6.222V21.95a1 1 0 01-2 0v-13a1 1 0 01.386-.79zM8.293 11.334a1 1 0 011.414 0L12 13.625l2.293-2.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-2.292 2.293 2.292 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L12 16.455l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l2.292-2.293-2.292-2.293a1 1 0 01-.083-1.32z" />
    </g>
  );

export default PinClosed;
