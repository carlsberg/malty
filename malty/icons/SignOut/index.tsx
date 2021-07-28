import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const SignOut = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 1.9A1.05 1.05 0 1117 4H4.07v15.9H17a1.05 1.05 0 110 2.1H3a1 1 0 01-1-1V2.9a1 1 0 011-1zm-1 3.9a1 1 0 01.76.32l4.94 5.14a1.08 1.08 0 010 1.49l-4.94 5.14a1 1 0 01-.73.31 1 1 0 01-.72-.32 1.08 1.08 0 010-1.49l3.21-3.33H7.79a1.06 1.06 0 010-2.12h10.7l-3.21-3.33a1.08 1.08 0 010-1.49A1 1 0 0116 5.8z" />
    </g>
  );

export default SignOut;
