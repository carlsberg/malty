import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function DiagonalUpRight({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17.66 5.34a1.02 1.02 0 01.484.125.878.878 0 01.111.071c.04.03.077.061.112.097l-.09-.08a1.006 1.006 0 01.383.787l-.004-.09.004.07v8.51a1 1 0 01-2 0l-.001-6.075-9.612 9.612a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l9.612-9.614-6.075.001a1 1 0 01-.993-.883L8.17 6.34a1 1 0 011-1z" />
      </g>
    </Icon>
  );
}

export default DiagonalUpRight;
