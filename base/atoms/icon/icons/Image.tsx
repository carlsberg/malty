import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Image(props: IconInterface) {
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
          d="M18.75 2a3.75 3.75 0 013.75 3.75v12a3.75 3.75 0 01-3.75 3.75h-14A3.75 3.75 0 011 17.75v-12A3.75 3.75 0 014.75 2zM6.936 15.894l-.098.095-3.272 3.674c.344.214.75.337 1.184.337h7.645L8.67 15.989l-.065-.066a1.25 1.25 0 00-1.669-.03zm7.665-1.957l-.09.103-2.567 3.269L14.442 20h4.308a2.24 2.24 0 001.43-.512l-3.677-5.414a1.25 1.25 0 00-1.902-.137zM18.75 3.5h-14A2.25 2.25 0 002.5 5.75v12c0 .252.041.494.118.72l3.12-3.502a2.75 2.75 0 013.887-.144l.074.07.07.074 1.141 1.228 2.42-3.082a2.75 2.75 0 014.268-.074l.116.149 3.272 4.818c.01-.085.014-.17.014-.257v-12a2.25 2.25 0 00-2.25-2.25zm-9 2.25a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Image;
