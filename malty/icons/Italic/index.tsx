import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Italic = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <path
      d="M16.002 5a1 1 0 01.116 1.993L16.003 7H13.83l-1.662 10h1.815a1 1 0 01.116 1.993l-.116.007H7.998a1 1 0 01-.116-1.993L7.997 17h2.147l1.662-10h-1.79a1 1 0 01-.116-1.993L10.017 5z"
      fillRule="evenodd"
    />
  );

export default Italic;
