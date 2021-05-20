import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Pint(props: IconInterface) {
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
          d="M8 21h8a1 1 0 00.983-.816l1.8-9.6a9.331 9.331 0 00-.218-4.72l-.603-2.136A1 1 0 0017 3H7a1 1 0 00-.96.72l-.62 2.13a9.455 9.455 0 00-.208 4.727l1.805 9.608A1 1 0 008 21zm.83-2l-1.657-8.815a7.495 7.495 0 01.163-3.761L7.75 5h8.493l.405 1.432a7.389 7.389 0 01.174 3.758L15.17 19z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Pint;
