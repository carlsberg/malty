import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Sent = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3.66 4.18c-.397-.824.42-1.678 1.238-1.376l.116.051 16.314 8.314a1 1 0 010 1.782L5.014 21.265c-.852.434-1.77-.462-1.355-1.325l3.791-7.881zM16.823 13H9.217l-2.471 5.136zM6.747 5.98L9.16 11h7.433z"
        fill="#1c2025"
      />
    </g>
  );

export default Sent;
