import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const PinChurn = ({ dataTestId = 'icon-PinChurn', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.14 1a1 1 0 01.707.293l5.86 5.86A1 1 0 0123 7.86v8.28a1 1 0 01-.293.707l-5.86 5.86a1 1 0 01-.707.293H7.86a1 1 0 01-.707-.293l-5.86-5.86A1 1 0 011 16.14V7.86a1 1 0 01.293-.707l5.86-5.86A1 1 0 017.86 1zm-.414 2H8.274L3 8.274v7.452L8.274 21h7.452L21 15.726V8.274zM12 16.04a1 1 0 110 2 1 1 0 010-2zM12 6a1 1 0 011 1v6a1 1 0 01-2 0V7a1 1 0 011-1z" />
    </g>
  </BaseIcon>
);
