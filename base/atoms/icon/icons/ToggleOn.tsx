import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function ToggleOn({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 5a7 7 0 010 14H7A7 7 0 017 5zm0 11a4 4 0 100-8 4 4 0 000 8z" />
      </g>
    </Icon>
  );
}

export default ToggleOn;
