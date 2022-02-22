import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const GlassMug = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <path
      d="M17 3a1 1 0 011 1v3h1a3 3 0 012.995 2.824L22 10v4a3 3 0 01-3 3h-1v1a3 3 0 01-2.824 2.995L15 21H7a3 3 0 01-3-3V4a1 1 0 011-1zm-1 2H6v13a1 1 0 00.883.993L7 19h8a1 1 0 001-1zM9 7a1 1 0 01.993.883L10 8v8a1 1 0 01-1.993.117L8 16V8a1 1 0 011-1zm4 0a1 1 0 01.993.883L14 8v8a1 1 0 01-1.993.117L12 16V8a1 1 0 011-1zm6 2h-.925l-.022 6H19a1 1 0 001-1v-4a1 1 0 00-1-1z"
      fillRule="evenodd"
    />
  );

export default GlassMug;
