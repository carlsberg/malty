import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function CheckboxEmpty({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <path
        d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"
        fillRule="evenodd"
      />
    </Icon>
  );
}

export default CheckboxEmpty;
