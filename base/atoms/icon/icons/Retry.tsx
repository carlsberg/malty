import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Retry({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8.87 2.721A9.5 9.5 0 1112.478 21a1 1 0 01.004-2A7.5 7.5 0 105 11.5l.002-.131 1.082-1.077a1 1 0 011.32-.081l.094.083a1 1 0 01-.002 1.414l-2.81 2.8a1 1 0 01-1.413 0l-2.8-2.8a1 1 0 011.414-1.415L3 11.407A9.5 9.5 0 018.87 2.72z" />
      </g>
    </Icon>
  );
}

export default Retry;
