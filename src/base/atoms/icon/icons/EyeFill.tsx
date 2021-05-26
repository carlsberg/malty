import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function EyeFill(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4c5.5 0 9.097 3.439 11 8-1.903 4.561-5.5 8-11 8s-9.097-3.439-11-8c1.903-4.561 5.5-8 11-8zm0 3c-2.767 0-5 2.233-5 5s2.233 5 5 5 5-2.233 5-5-2.233-5-5-5zm0 2c1.662 0 3 1.338 3 3s-1.338 3-3 3-3-1.338-3-3 1.338-3 3-3z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default EyeFill;
