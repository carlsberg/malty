import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Pin(props: IconInterface) {
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
          d="M12 1a9 9 0 019 9c0 2.927-1.605 5.936-4.253 8.914a32.048 32.048 0 01-3.777 3.596c-.173.139-.299.237-.37.29a1 1 0 01-1.2 0 15.282 15.282 0 01-.37-.29 32.048 32.048 0 01-3.777-3.596C4.605 15.936 3 12.927 3 10a9 9 0 019-9zm0 2a7 7 0 00-7 7c0 2.323 1.395 4.94 3.747 7.586A30.072 30.072 0 0012 20.72a30.072 30.072 0 003.253-3.135C17.605 14.94 19 12.324 19 10a7 7 0 00-7-7zm0 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default Pin;
