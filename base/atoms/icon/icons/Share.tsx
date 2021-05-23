import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Share(props: IconInterface) {
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
          d="M19.727.23a4.002 4.002 0 11-3.175 6.437l-8.728 4.24a4.091 4.091 0 01.044 2.003l8.54 4.672a4.002 4.002 0 11-.65 1.925L6.953 14.69A3.858 3.858 0 014.06 16c-2.167 0-3.91-1.798-3.91-4.001 0-2.204 1.743-4.002 3.91-4.002a3.85 3.85 0 012.765 1.172l8.943-4.345A4.002 4.002 0 0119.727.23zm.024 17.552a2.002 2.002 0 100 4.004 2.002 2.002 0 000-4.004zM4.061 9.996c-1.049 0-1.91.889-1.91 2.002 0 1.112.861 2 1.91 2 1.047 0 1.91-.889 1.91-2 0-1.113-.863-2.002-1.91-2.002zM19.727 2.23a2.002 2.002 0 10.001 4.004 2.002 2.002 0 00-.002-4.004z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Share;
