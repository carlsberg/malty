import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function RadiobuttonOn({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
      </g>
    </Icon>
  );
}

export default RadiobuttonOn;
