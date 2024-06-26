import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Contract = ({ dataTestId = 'icon-Contract', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10.778 12.222a1 1 0 01.993.883l.007.117v7.07a1 1 0 01-1.993.118l-.007-.117v-4.658l-4.07 4.072a1 1 0 01-1.328.078l-.087-.078a1 1 0 01-.083-1.32l.083-.094 4.07-4.072H3.707a1 1 0 01-.992-.874l-.008-.125a1 1 0 01.883-.993l.117-.007zm2.446-9.517a1 1 0 01.993.883l.007.117V8.37l4.073-4.073a1 1 0 011.327-.078l.087.078a1 1 0 01.083 1.32l-.083.094-4.064 4.065h4.648a1 1 0 01.992.875l.008.125a1 1 0 01-.883.993l-.117.007h-7.071a1 1 0 01-.993-.883l-.007-.117V3.705a1 1 0 011-1z" />
    </g>
  </BaseIcon>
);
