import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function DiagonalUpLeft(props: IconInterface) {
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
          d="M14.83 5.34a1 1 0 010 2l-6.076-.001 9.613 9.614a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L7.339 8.754l.001 6.076a1 1 0 01-.883.993l-.117.007a1 1 0 01-1-1V6.34a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09a1.006 1.006 0 01.787-.383l-.09.004.07-.004h.02z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default DiagonalUpLeft;
