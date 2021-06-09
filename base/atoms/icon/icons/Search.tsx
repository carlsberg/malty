import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Search({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10.54 4a6.54 6.54 0 015.278 10.403l3.97 3.97a1 1 0 01-1.32 1.497l-.095-.083-3.97-3.97A6.54 6.54 0 1110.54 4zm0 2a4.54 4.54 0 100 9.08 4.54 4.54 0 000-9.08z" />
      </g>
    </Icon>
  );
}

export default Search;
