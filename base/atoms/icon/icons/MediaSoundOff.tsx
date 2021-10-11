import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function MediaSoundOff(props: IconInterface) {
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
          d="M11.72 4.597A2 2 0 0115 6.133v11.73a2 2 0 01-3.28 1.537l-4.083-3.402H4a2 2 0 01-1.995-1.85L2 13.997v-4a2 2 0 012-2h3.636zM13 6.133L8.362 9.998H4v4h4.362L13 17.863zm5.113 2.577l.094.083L20 10.585l1.793-1.792a1 1 0 011.497 1.32l-.083.094L21.414 12l1.793 1.794a1 1 0 01-1.32 1.497l-.094-.083L20 13.414l-1.793 1.793a1 1 0 01-1.497-1.32l.083-.094 1.792-1.794-1.792-1.792a1 1 0 011.32-1.497z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default MediaSoundOff;
