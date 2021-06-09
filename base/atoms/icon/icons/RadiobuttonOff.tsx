import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function RadiobuttonOff({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z" />
      </g>
    </Icon>
  );
}

export default RadiobuttonOff;
