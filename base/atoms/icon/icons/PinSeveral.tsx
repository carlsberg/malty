import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function PinSeveral(props: IconInterface) {
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
          d="M6.293 1.333a1 1 0 011.414 0l4 4A1 1 0 0112 6.04v3.08l2.782-2.786a1 1 0 011.321-.084l.095.084 5.49 5.5a1 1 0 01.292.706v9.61a1 1 0 01-2 0v-9.196l-4.49-4.498L11 12.954v9.196a1 1 0 01-2 0v-9.61a1 1 0 01.292-.706l.712-.714-.004-.08V6.454l-3-3-3 3v6.586a1 1 0 01-2 0v-7a1 1 0 01.293-.707z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default PinSeveral;
