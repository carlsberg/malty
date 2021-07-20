import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Upload = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 13.17a1 1 0 011 1V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.83a1 1 0 012 0V19a1 1 0 001 1h14a1 1 0 001-1v-4.83a1 1 0 011-1zM11.32 2.23a1.09 1.09 0 011.48 0l5.14 4.95a1 1 0 010 1.45 1.09 1.09 0 01-1.49 0l-3.33-3.22v10.7a1.06 1.06 0 01-2.12 0V5.41L7.67 8.63a1.1 1.1 0 01-1.49 0 1 1 0 010-1.45z" />
    </g>
  );

export default Upload;
