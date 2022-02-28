import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const MediaSound = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.72 4.597A2 2 0 0115 6.133v11.73a2 2 0 01-3.28 1.537l-4.083-3.402H4a2 2 0 01-1.995-1.85L2 13.997v-4a2 2 0 012-2h3.636zM13 6.133L8.362 9.998H4v4h4.362L13 17.863zM17.5 8a4 4 0 110 8 1 1 0 01-.117-1.993L17.5 14a2 2 0 100-4 1 1 0 010-2z" />
    </g>
  );

export default MediaSound;
