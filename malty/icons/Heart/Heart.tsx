import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Heart = ({ dataTestId = 'icon-Heart', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.5 2.95a5.5 5.5 0 015.5 5.5c0 3.466-1.81 6.725-4.793 9.707a27.813 27.813 0 01-4.271 3.483c-.196.129-.34.218-.422.267a1 1 0 01-1.028 0 13.21 13.21 0 01-.422-.267 27.813 27.813 0 01-4.271-3.483C3.81 15.175 2 11.916 2 8.45a5.5 5.5 0 0110-3.163 5.493 5.493 0 014.5-2.337zm-3.685 16.337a25.836 25.836 0 002.978-2.544C18.436 14.1 20 11.284 20 8.45a3.5 3.5 0 00-7 0c0 1.333-2 1.333-2 0a3.5 3.5 0 00-7 0c0 2.834 1.564 5.65 4.207 8.293A25.836 25.836 0 0012 19.86c.25-.168.524-.36.815-.573z" />
    </g>
  </BaseIcon>
);
