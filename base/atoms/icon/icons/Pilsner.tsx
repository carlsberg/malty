import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Pilsner(props: IconInterface) {
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
          d="M8.448 20.987c-.085.21-.142.293-.13.282C7.654 21.889 8.092 23 9 23h6c.89 0 1.337-1.077.707-1.707.013.013-.04-.07-.122-.284-.174-.46-.285-1.12-.285-2.009l1.695-16.9A1 1 0 0016 1H8a1 1 0 00-.995 1.102L8.75 19.05c-.005.856-.121 1.491-.302 1.937zM14.895 3l-1.59 15.9c-.003.84.067 1.527.197 2.1h-2.965c.137-.567.213-1.232.213-2l-.005-.102L9.108 3z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Pilsner;
