import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const DiagonalUpLeft = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14.83 5.34a1 1 0 010 2l-6.076-.001 9.613 9.614a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L7.339 8.754l.001 6.076a1 1 0 01-.883.993l-.117.007a1 1 0 01-1-1V6.34a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09a1.006 1.006 0 01.787-.383l-.09.004.07-.004h.02z" />
    </g>
  </BaseIcon>
);

export default DiagonalUpLeft;
