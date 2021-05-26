import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Draughtmaster(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 5a4.5 4.5 0 014.5 4.5v7a4.5 4.5 0 11-9 0v-7A4.5 4.5 0 0112 5zm0 2a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 105 0v-7A2.5 2.5 0 0012 7zm2-4a1 1 0 110 2h-4a1 1 0 110-2z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Draughtmaster;
