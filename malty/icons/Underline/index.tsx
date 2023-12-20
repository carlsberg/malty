import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Underline = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      d="M18 19a1 1 0 01.117 1.993L18 21H6a1 1 0 01-.117-1.992L6 19zM10 4a1 1 0 01.117 1.992L10 6H9v6.005a3 3 0 006 0V6.006h-1a1 1 0 01-.117-1.991L14 4.008h4A1 1 0 0118.117 6L18 6.007l-1-.001v5.998a4.999 4.999 0 01-5 4.998c-2.761 0-5-2.238-5-4.998V6H6a1 1 0 01-.117-1.992L6 4z"
      fillRule="evenodd"
    />
  </BaseIcon>
);

export default Underline;
