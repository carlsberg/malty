import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Download({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 13.17a1 1 0 011 1V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.83a1 1 0 012 0V19a1 1 0 001 1h14a1 1 0 001-1v-4.83a1 1 0 011-1zM12.06 1.94c.585 0 1.06.475 1.06 1.06v10.7l3.33-3.22a1.1 1.1 0 011.49 0 1 1 0 010 1.45l-5.14 4.95a1.09 1.09 0 01-1.48 0l-5.14-4.95a1 1 0 010-1.45 1.09 1.09 0 011.49 0L11 13.7V3c0-.585.475-1.06 1.06-1.06z" />
      </g>
    </Icon>
  );
}

export default Download;
