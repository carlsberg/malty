import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function ArrowSmallLeft(props: IconInterface) {
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
          d="M9.293 5.293a1 1 0 011.414 1.414L6.414 11H20a1 1 0 01.993.883L21 12a1 1 0 01-1 1H6.414l4.293 4.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-6-6-.073-.082A1.004 1.004 0 013 12l.004.09A1.006 1.006 0 013 12.02V12a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default ArrowSmallLeft;
