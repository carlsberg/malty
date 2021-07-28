import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const ItemCheckFilled = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.2 8.2l-4.108 5.478-2.385-2.385a1 1 0 10-1.414 1.414l3.2 3.2A1 1 0 0012 15.8l4.8-6.4a1 1 0 00-1.6-1.2z" />
    </g>
  );

export default ItemCheckFilled;
