import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const AddEvent = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 1a1 1 0 01.993.883L18 2v1h2a3 3 0 012.995 2.824L23 6v13a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h2V2a1 1 0 011.993-.117L8 2v1h8V2a1 1 0 011-1zm4 9H3v9a1 1 0 00.883.993L4 20h16a1 1 0 001-1zm-9 2a1 1 0 01.993.883L13 13v1h1a1 1 0 01.117 1.993L14 16h-1v1a1 1 0 01-1.993.117L11 17v-1h-1a1 1 0 01-.117-1.993L10 14h1v-1a1 1 0 011-1zM6 5H4a1 1 0 00-1 1v2h18V6a1 1 0 00-.883-.993L20 5h-2v1a1 1 0 01-1.993.117L16 6V5H8v1a1 1 0 01-1.993.117L6 6z" />
    </g>
  </BaseIcon>
);

export default AddEvent;
