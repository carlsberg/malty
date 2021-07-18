import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const ItemClose = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.293 7.293a1 1 0 011.414 0L12 10.585l3.293-3.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L13.415 12l3.292 3.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L12 13.415l-3.293 3.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L10.585 12 7.293 8.707a1 1 0 01-.083-1.32z" />
    </g>
  );

export default ItemClose;
