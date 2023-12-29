import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ArrowSmallUp = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a1.02 1.02 0 01.484.125.878.878 0 01.111.071c.04.03.077.061.112.097l-.09-.08.008.007.082.073 6 6a1 1 0 11-1.414 1.414L13 6.414V20a1 1 0 01-.883.993L12 21a1 1 0 01-1-1V6.414l-4.293 4.293a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l6-6 .082-.073A1.004 1.004 0 0112 3l-.09.004.072-.004z" />
    </g>
  </BaseIcon>
);
