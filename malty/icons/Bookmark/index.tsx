import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Bookmark = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <path
      d="M16 3H8a3 3 0 00-3 3v14l.006.112a1 1 0 001.619.669L12 17.28l5.375 3.5A1 1 0 0019 20V6a3 3 0 00-3-3zm0 2l.117.007A1 1 0 0117 6v11.92l-4.375-2.7-.103-.073a1 1 0 00-1.147.072L7 17.92V6a1 1 0 011-1z"
      fillRule="evenodd"
    />
  );

export default Bookmark;
