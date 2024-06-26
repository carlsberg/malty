import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Map = ({ dataTestId = 'icon-Map', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 0a6.603 6.603 0 016.405 5H22a1 1 0 011 1v17a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h3.595A6.603 6.603 0 0112 0zM3 16.325V22h.53l3.719-4.46zm6.35 1.815L6.136 22H15v-2.246zM21 15.765l-2.132 3.731A1 1 0 0118 20h-1v2h4zM5.413 7H3v7.245l6.275 1.793L16.14 18h1.279L21 11.734V7h-2.413c-.134 2.009-1.26 4.038-3.04 6.04A22.73 22.73 0 0112.6 15.8a1 1 0 01-1.2 0 22.73 22.73 0 01-2.947-2.76C6.673 11.037 5.547 9.008 5.413 7zM12 2a4.6 4.6 0 00-4.6 4.6c0 1.536.945 3.308 2.547 5.11A20.754 20.754 0 0012 13.714l.216-.187a20.754 20.754 0 001.837-1.815C15.655 9.908 16.6 8.136 16.6 6.6A4.6 4.6 0 0012 2zm0 1.5a3.1 3.1 0 110 6.2 3.1 3.1 0 010-6.2zm0 2a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
    </g>
  </BaseIcon>
);
