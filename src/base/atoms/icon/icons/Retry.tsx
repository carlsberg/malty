import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Retry(props: IconInterface) {
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
          d="M8.87 2.721A9.5 9.5 0 1112.478 21a1 1 0 01.004-2A7.5 7.5 0 105 11.5l.002-.131 1.082-1.077a1 1 0 011.32-.081l.094.083a1 1 0 01-.002 1.414l-2.81 2.8a1 1 0 01-1.413 0l-2.8-2.8a1 1 0 011.414-1.415L3 11.407A9.5 9.5 0 018.87 2.72z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Retry;
