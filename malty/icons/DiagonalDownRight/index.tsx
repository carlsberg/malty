import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const DiagonalDownRight = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5.633 5.633a1 1 0 011.414 0l9.612 9.611.001-6.074a1 1 0 01.883-.993l.117-.007a1 1 0 011 1v8.49a1.02 1.02 0 01-.125.484.878.878 0 01-.071.111.999.999 0 01-.097.112l.08-.09a1.006 1.006 0 01-.787.383l.09-.004a1.006 1.006 0 01-.07.004H9.17a1 1 0 010-2l6.074-.001-9.611-9.612a1 1 0 01-.083-1.32z" />
    </g>
  );

export default DiagonalDownRight;
