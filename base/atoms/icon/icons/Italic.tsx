import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Italic(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.002 5a1 1 0 01.116 1.993L16.003 7H13.83l-1.662 10h1.815a1 1 0 01.116 1.993l-.116.007H7.998a1 1 0 01-.116-1.993L7.997 17h2.147l1.662-10h-1.79a1 1 0 01-.116-1.993L10.017 5z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Italic;
