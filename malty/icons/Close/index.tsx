import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Close = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6.249 4.846l.094.083L12 10.585l5.657-5.656a1 1 0 011.497 1.32l-.083.094L13.415 12l5.656 5.657a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-5.657 5.656a1 1 0 01-1.497-1.32l.083-.094L10.585 12 4.929 6.343a1 1 0 011.32-1.497z" />
    </g>
  );

export default Close;
