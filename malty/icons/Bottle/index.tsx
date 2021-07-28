import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Bottle = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3v4c0 .566-.191.971-.85 1.936C7.27 10.22 6.95 10.9 6.95 12v7a2.997 2.997 0 00.87 2.124c.59.586 1.387.9 2.21.876H14a3 3 0 003-3v-7c0-1.094-.313-1.772-1.168-3.055C15.187 7.978 15 7.572 15 7V3a1 1 0 00-1-1h-4a1 1 0 00-1 1zm2 1h2v3c0 1.094.313 1.772 1.168 3.055.645.967.832 1.373.832 1.945v7a1 1 0 01-1 1h-4a1.02 1.02 0 01-.765-.29.996.996 0 01-.285-.704V12c0-.566.191-.971.85-1.936C10.68 8.78 11 8.1 11 7z" />
    </g>
  );

export default Bottle;
