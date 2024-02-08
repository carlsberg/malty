import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Home = ({ dataTestId = 'icon-Home', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 23a1 1 0 01-1-1V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v13a1 1 0 01-1 1zm9-19.733L4 9.489V21l5-.001V15a1 1 0 011-1h4a1 1 0 011 1v5.999L20 21V9.49zM13 16h-2v4.999h2z" />
    </g>
  </BaseIcon>
);
