import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function MediaPlay(props: IconInterface) {
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
          d="M7.5 18l.006.136c.1 1.2 1.534 1.794 2.455 1.017l.024-.024 7.969-5.975.107-.093a1.5 1.5 0 000-2.122l-.107-.093L9.985 4.87l.076.07C9.116 3.993 7.5 4.663 7.5 6zm2-10.994L16.158 12 9.5 16.993z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default MediaPlay;
