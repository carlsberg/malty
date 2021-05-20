import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Text(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 4a1 1 0 01.993.883L18 5v14a1 1 0 01-1.993.117L16 19V5a1 1 0 011-1zM9 6a1 1 0 01.993.883L10 7v1h2a1 1 0 01.117 1.993L12 10h-2v5c0 .512.387.935.883.993L11 16a1 1 0 010 2 3 3 0 01-2.995-2.824L8 15v-5H6a1 1 0 01-.117-1.993L6 8h2V7a1 1 0 011-1z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Text;
