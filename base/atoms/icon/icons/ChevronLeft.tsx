import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function ChevronLeft({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10.414 12l5.293-5.293a1 1 0 00-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a1 1 0 101.414-1.414z" />
      </g>
    </Icon>
  );
}

export default ChevronLeft;
