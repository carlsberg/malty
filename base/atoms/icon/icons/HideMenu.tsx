import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function HideMenu(props: IconInterface) {
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
          d="M2 3a1 1 0 01.993.884L3 4v16a1 1 0 01-1.993.117L1 20V4a1 1 0 011-1zm13.613.21l.094.083 8 8c.029.029.055.059.08.09l-.08-.09a1.008 1.008 0 01.292.675L24 12v.034l-.004.052L24 12a1.008 1.008 0 01-.22.626l-.073.082-8 8a1 1 0 01-1.497-1.32l.083-.095L20.584 13H6a1 1 0 01-.117-1.993L6 11h14.586l-6.293-6.292a1 1 0 01-.083-1.32l.083-.095a1 1 0 011.32-.083z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default HideMenu;
