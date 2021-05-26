import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function HeartFilled(props: IconInterface) {
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
          d="M16.5 2.95a5.5 5.5 0 015.5 5.5c0 3.466-1.81 6.725-4.793 9.707a27.813 27.813 0 01-4.271 3.483c-.196.129-.34.218-.422.267a1 1 0 01-1.028 0 13.21 13.21 0 01-.422-.267 27.813 27.813 0 01-4.271-3.483C3.81 15.175 2 11.916 2 8.45a5.5 5.5 0 0110-3.163 5.493 5.493 0 014.5-2.337z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default HeartFilled;
