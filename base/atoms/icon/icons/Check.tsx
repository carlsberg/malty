import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Check({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10.355 16.448l-5.22-5.22a1.09 1.09 0 10-1.543 1.543l6.11 6.11a1.09 1.09 0 001.643-.117L20.51 6.545a1.09 1.09 0 10-1.745-1.309z" />
      </g>
    </Icon>
  );
}

export default Check;
