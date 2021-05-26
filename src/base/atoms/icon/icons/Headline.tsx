import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Headline(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 2a1 1 0 01.994.884L21 3v18a1 1 0 01-1.993.116L19 21V3a1 1 0 011-1zm-8 18a1 1 0 01-.117-1.993L12 18h1v-5H7v5h1a1 1 0 01.117 1.993L8 20H4a1 1 0 01-.117-1.993L4 18h1V6H4a1 1 0 01-.117-1.993L4 4h4a1 1 0 01.117 1.993L8 6H7v5h6V6h-1a1 1 0 01-.117-1.993L12 4h4a1 1 0 01.117 1.993L16 6h-1v12h1a1 1 0 01.117 1.993L16 20z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Headline;
