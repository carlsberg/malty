import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const TechnicalSupport = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18.45 4.8a7 7 0 00-3.72-3.72 1 1 0 00-1.39.92v4.53h-2.68V2a1 1 0 00-1.39-.92 7 7 0 00-2.22 11.4 7.36 7.36 0 001.61 1.17V22a1 1 0 002 0v-8.94a.9.9 0 00-.07-.37 1.26 1.26 0 00-.11-.17c0-.05-.06-.11-.1-.15a1 1 0 00-.33-.22 5.21 5.21 0 01-1.59-1.08A5 5 0 017 7.53a5 5 0 01.39-2A4.88 4.88 0 018.47 4l.19-.19v3.73a1 1 0 001 1h4.68a1 1 0 001-1V3.8a1.8 1.8 0 00.2.19A5 5 0 0117 7.53a5 5 0 01-3 4.6 1 1 0 00-.62.93V22a1 1 0 002 0v-8.35a6.67 6.67 0 003.12-3.4 7 7 0 000-5.45z" />
    </g>
  </BaseIcon>
);

export default TechnicalSupport;
