import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Underline(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 19a1 1 0 01.117 1.993L18 21H6a1 1 0 01-.117-1.992L6 19zM10 4a1 1 0 01.117 1.992L10 6H9v6.005a3 3 0 006 0V6.006h-1a1 1 0 01-.117-1.991L14 4.008h4A1 1 0 0118.117 6L18 6.007l-1-.001v5.998a4.999 4.999 0 01-5 4.998c-2.761 0-5-2.238-5-4.998V6H6a1 1 0 01-.117-1.992L6 4z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Underline;
