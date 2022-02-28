import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Trash = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14 1a3 3 0 013 3v1h1a3 3 0 012.995 2.824L21 8v2a1 1 0 01-1 1v8a4 4 0 01-4 4H8a4 4 0 01-4-4v-8a1 1 0 01-1-1V8a3 3 0 013-3h1V4a3 3 0 012.824-2.995L10 1zm4 10H6v8a2 2 0 002 2h8a2 2 0 002-2zm-4 2a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm-4 0a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm8-6H6a1 1 0 00-1 1v1h14V8a1 1 0 00-1-1zm-4-4h-4a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1z" />
    </g>
  );

export default Trash;
