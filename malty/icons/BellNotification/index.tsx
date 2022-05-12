import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const BellNotification = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <g transform="translate(2)">
        <path d="M10 0a1 1 0 011 1l.001.98c.2.026.4.06.598.102a1 1 0 01-.418 1.956c-.379-.08-.766-.12-1.17-.118h-.026a5.992 5.992 0 00-4.23 1.71 5.907 5.907 0 00-1.283 1.896 6.081 6.081 0 00-.466 2.085L4 9.92 3.999 18H16v-7.04a1 1 0 011.993-.117l.007.117V18h1a1 1 0 01.993.883L20 19a1 1 0 01-.883.993L19 20h-5a4 4 0 01-7.995.13L6 19.999 1 20a1 1 0 01-.993-.883L0 19a1 1 0 01.883-.993L1 18h.999L2 9.926a8.083 8.083 0 01.629-3.175A7.917 7.917 0 014.35 4.206 8.002 8.002 0 019 1.975V1a1 1 0 011-1zm1.997 19.999L8.001 20a2 2 0 003.994.08z" />
        <circle cx={17} cy={5} fill="#f45f5e" r={3} />
      </g>
    </g>
  );

export default BellNotification;
