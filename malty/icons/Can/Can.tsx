import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Can = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 8a.58.58 0 000-.18.65.65 0 00-.05-.2l-1.48-2.87a1 1 0 00-.89-.54H12L9.35 2.52A1 1 0 008.27 4.2h.05a1 1 0 00-.75.53L6.14 7.61a.65.65 0 00-.05.2A.58.58 0 006 8v10a3 3 0 00.88 2.13A3 3 0 009 21h6a3 3 0 003-3zm-2 8a2 2 0 110-4zm-.6-9H8.62l.44-.88h5.88zM15 19H9a1 1 0 01-.71-.3A1 1 0 018 18V9h8v1a4 4 0 100 8 1 1 0 01-1 1z" />
    </g>
  </BaseIcon>
);
