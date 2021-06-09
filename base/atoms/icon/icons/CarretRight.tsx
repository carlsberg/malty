import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function CarretRight({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8.5 6a.5.5 0 01.854-.354l6 6a.5.5 0 010 .708l-6 6A.5.5 0 018.5 18z" />
      </g>
    </Icon>
  );
}

export default CarretRight;
