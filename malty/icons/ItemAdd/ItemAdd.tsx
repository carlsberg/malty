import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ItemAdd = ({ dataTestId = 'icon-ItemAdd', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.343a1 1 0 011 1V11h4.657a1 1 0 01.993.883l.007.117a1 1 0 01-1 1H13v4.657a1 1 0 01-.883.993l-.117.007a1 1 0 01-1-1L10.999 13H6.343a1 1 0 01-.993-.883L5.343 12a1 1 0 011-1H11V6.343a1 1 0 01.883-.993z" />
    </g>
  </BaseIcon>
);
