import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Trophy = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20a1 1 0 010-2h1v-3.083a6.005 6.005 0 01-4.2-2.921A5 5 0 017 2h10a5 5 0 010 10l.2-.004a6.005 6.005 0 01-4.2 2.92V18h1a1 1 0 010 2h2a1 1 0 010 2H8a1 1 0 010-2zm6-16H8v5a4 4 0 108 0zM6 4.17a3.001 3.001 0 00.06 5.68A6.047 6.047 0 016 9zm12 .001V9c0 .288-.02.571-.06.849A3 3 0 0018 4.17z" />
    </g>
  );

export default Trophy;
