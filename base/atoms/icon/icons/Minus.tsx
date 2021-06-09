import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Minus({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 13h10a1 1 0 000-2H7a1 1 0 100 2z" />
      </g>
    </Icon>
  );
}

export default Minus;
