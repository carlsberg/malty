import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function MenuRight({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M23 18a1 1 0 010 2h-6a1 1 0 010-2zm0-7a1 1 0 010 2H9a1 1 0 110-2zm0-7a1 1 0 010 2H1a1 1 0 110-2z" />
      </g>
    </Icon>
  );
}

export default MenuRight;
