import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Customer({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a5 5 0 012.344 9.418C17.74 12.54 20.131 15.794 20 19.52v1.92a1 1 0 01-2 0v-1.955c.122-3.457-2.58-6.36-5.963-6.486C8.58 13.126 5.878 16.028 6 19.52v1.92a1 1 0 01-2 0v-1.885c-.13-3.745 2.25-6.997 5.671-8.131A5 5 0 0112 2zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </g>
    </Icon>
  );
}

export default Customer;
