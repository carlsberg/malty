import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const CartLabel = ({ dataTestId = 'icon-CartLabel', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path
        d="M8 18.5A1.5 1.5 0 118 21.499 1.5 1.5 0 018 18.5zm10 0A1.5 1.5 0 1118 21.499 1.5 1.5 0 0118 18.5zM5.11 3a1 1 0 01.94.656l.033.11L8.788 15h8.43l1.812-7.243a1 1 0 011.098-.749l.114.022a1 1 0 01.75 1.098l-.022.115-2 8a1 1 0 01-.857.75L18 17H8a1 1 0 01-.94-.656l-.032-.11L4.322 5H3a1 1 0 01-.993-.883L2 4a1 1 0 01.883-.993L3 3z"
        fill="none"
      />
      <circle cx={17.5} cy={6.5} fill="#8ba0b9" r={6.5} />
      <text fill="#fff" fontFamily="Montserrat-Bold, Montserrat" fontSize={6} fontWeight="bold">
        <tspan x={15.463} y={7}>
          0
        </tspan>
      </text>
    </g>
  </BaseIcon>
);
