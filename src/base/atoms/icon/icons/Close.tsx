import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Close(props: IconInterface) {
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
          d="M6.249 4.846l.094.083L12 10.585l5.657-5.656a1 1 0 011.497 1.32l-.083.094L13.415 12l5.656 5.657a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-5.657 5.656a1 1 0 01-1.497-1.32l.083-.094L10.585 12 4.929 6.343a1 1 0 011.32-1.497z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Close;
