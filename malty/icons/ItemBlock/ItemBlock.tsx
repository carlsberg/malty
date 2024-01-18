import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ItemBlock = ({ dataTestId = 'icon-ItemBlock', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C9.87501 21 7.92202 20.2635 6.38236 19.0319L13.415 12L19.0319 6.38232C20.2635 7.92199 21 9.87499 21 12ZM4.96809 17.6177L12 10.585L17.6176 4.96806C16.078 3.73645 14.125 3 12 3C7.02944 3 3 7.02944 3 12C3 14.125 3.73647 16.078 4.96809 17.6177ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
    />
  </BaseIcon>
);
