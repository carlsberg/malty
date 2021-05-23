import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function ItemCloseFilled(props: IconInterface) {
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
          d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.613 7.21a1 1 0 00-1.32.083l-.083.094a1 1 0 00.083 1.32L10.585 12l-3.292 3.293-.083.094a1 1 0 00.083 1.32l.094.083a1 1 0 001.32-.083L12 13.415l3.293 3.292.094.083a1 1 0 001.32-.083l.083-.094a1 1 0 00-.083-1.32L13.415 12l3.292-3.293.083-.094a1 1 0 00-.083-1.32l-.094-.083a1 1 0 00-1.32.083L12 10.585 8.707 7.293z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default ItemCloseFilled;
