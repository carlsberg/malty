import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function More({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 18a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 110 4 2 2 0 010-4z" />
      </g>
    </Icon>
  );
}

export default More;
