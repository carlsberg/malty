import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Tulipe(props: IconInterface) {
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
          d="M16.17 2a1 1 0 01.996.906L18 11.83a6.002 6.002 0 01-5 5.917V21h2a1 1 0 01.993.883L16 22a1 1 0 01-1 1H9a1 1 0 010-2h2v-3.253a6.002 6.002 0 01-4.996-5.692L6 11.83l.004-.094.83-8.83A1 1 0 017.83 2zm-.91 2H8.74L8 11.874a4 4 0 004 3.956c2.21 0 4-1.79 4.004-3.906z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Tulipe;
