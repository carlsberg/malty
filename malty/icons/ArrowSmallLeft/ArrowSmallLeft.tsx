import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const ArrowSmallLeft = ({ dataTestId = 'icon-ArrowSmallLeft', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9.293 5.293a1 1 0 011.414 1.414L6.414 11H20a1 1 0 01.993.883L21 12a1 1 0 01-1 1H6.414l4.293 4.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-6-6-.073-.082A1.004 1.004 0 013 12l.004.09A1.006 1.006 0 013 12.02V12a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z" />
    </g>
  </BaseIcon>
);
