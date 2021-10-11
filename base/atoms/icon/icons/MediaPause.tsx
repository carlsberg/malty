import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function MediaPause(props: IconInterface) {
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
          d="M9 7a1 1 0 01.993.883L10 8v8a1 1 0 01-1.993.117L8 16V8a1 1 0 011-1zm6 0a1 1 0 01.993.883L16 8v8a1 1 0 01-1.993.117L14 16V8a1 1 0 011-1z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default MediaPause;
