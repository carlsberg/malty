import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const PinProspect = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.998 2.04a5 5 0 012.387 9.394c3.372 1.142 5.742 4.385 5.611 8.096v1.91a1 1 0 11-2 0l.001-1.945c.121-3.46-2.579-6.365-5.961-6.496a6.278 6.278 0 00-6.037 6.571v1.91a1 1 0 11-1.999 0v-1.87a8.281 8.281 0 012.194-5.957 8.22 8.22 0 013.426-2.215A5 5 0 017.998 2.04zm11.29.423a1 1 0 011.414 0l3 3a1 1 0 01-1.415 1.414l-1.293-1.293v7.326a1 1 0 01-.882.993l-.117.007a1 1 0 01-1-1V5.583l-1.292 1.294a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414zM7.998 4.04a3 3 0 100 6 3 3 0 000-6z" />
    </g>
  </BaseIcon>
);

export default PinProspect;
