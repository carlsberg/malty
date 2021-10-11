import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function SignOut(props: IconInterface) {
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
          d="M17 1.9A1.05 1.05 0 1117 4H4.07v15.9H17a1.05 1.05 0 110 2.1H3a1 1 0 01-1-1V2.9a1 1 0 011-1zm-1 3.9a1 1 0 01.76.32l4.94 5.14a1.08 1.08 0 010 1.49l-4.94 5.14a1 1 0 01-.73.31 1 1 0 01-.72-.32 1.08 1.08 0 010-1.49l3.21-3.33H7.79a1.06 1.06 0 010-2.12h10.7l-3.21-3.33a1.08 1.08 0 010-1.49A1 1 0 0116 5.8z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default SignOut;
