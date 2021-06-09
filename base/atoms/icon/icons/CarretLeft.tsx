import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function CarretLeft({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 18a.5.5 0 01-.854.354l-6-6a.5.5 0 010-.708l6-6A.5.5 0 0115.5 6z" />
      </g>
    </Icon>
  );
}

export default CarretLeft;
