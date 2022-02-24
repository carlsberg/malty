import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const AppFacebook = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17.591 2.007h-2.638a4.704 4.704 0 00-3.588 1.374 4.518 4.518 0 00-1.305 3.556v2.265H7.422c-.11-.004-.218.037-.298.112S7 9.494 7 9.603v3.287c0 .228.189.414.422.414h2.638v8.295c0 .108.045.212.124.288s.187.116.298.113h3.456c.11.003.218-.037.297-.113s.125-.18.125-.288V13.29h3.112c.111 0 .217-.044.294-.122a.397.397 0 00.115-.292V9.59a.405.405 0 00-.409-.401H14.36V7.26c0-.92.224-1.385 1.45-1.385h1.781A.418.418 0 0018 5.462V2.408a.397.397 0 00-.12-.284.413.413 0 00-.289-.117z" />
    </g>
  );

export default AppFacebook;
