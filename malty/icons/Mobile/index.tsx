import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Mobile = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.162 0a3.027 3.027 0 013.026 3.027v17.711a3.027 3.027 0 01-3.026 3.027H7.027A3.028 3.028 0 014 20.738V3.028A3.028 3.028 0 017.027-.002zM7.669 2h-.642C6.46 2 6 2.46 6 3.027v17.71c0 .567.46 1.027 1.027 1.027h9.135c.566 0 1.026-.46 1.026-1.027V3.028c0-.568-.46-1.029-1.026-1.029h-.673a1.5 1.5 0 01-1.344 1.668L14 3.676l-4.84.005A1.5 1.5 0 017.668 2zm3.904 16.254c1.289 0 1.286 2 0 2-1.29 0-1.287-2 0-2z" />
    </g>
  );

export default Mobile;
