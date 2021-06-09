import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function MediaStop({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16 6H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2zM8 8h8v8H8z" />
      </g>
    </Icon>
  );
}

export default MediaStop;
