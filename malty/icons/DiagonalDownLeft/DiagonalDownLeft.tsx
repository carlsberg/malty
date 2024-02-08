import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const DiagonalDownLeft = ({ dataTestId = 'icon-DiagonalDownLeft', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.953 5.633a1 1 0 011.414 1.414L8.755 16.66l6.075.001a1 1 0 01.993.883l.007.117a1 1 0 01-1 1H6.34a1.02 1.02 0 01-.484-.125.878.878 0 01-.111-.071.999.999 0 01-.112-.097l.09.08a1.006 1.006 0 01-.383-.787l.004.09a1.006 1.006 0 01-.004-.07V9.17a1 1 0 112 0l-.001 6.075z" />
    </g>
  </BaseIcon>
);
