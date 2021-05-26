import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function PinLabeling(props: IconInterface) {
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
          d="M12 1a9 9 0 019 9c0 2.927-1.605 5.936-4.253 8.914a32.048 32.048 0 01-3.777 3.596c-.173.139-.299.237-.37.29a1 1 0 01-1.2 0 15.282 15.282 0 01-.37-.29 32.048 32.048 0 01-3.777-3.596C4.605 15.936 3 12.927 3 10a9 9 0 019-9zm0 2a7 7 0 00-7 7c0 2.323 1.395 4.94 3.747 7.586A30.072 30.072 0 0012 20.72a30.072 30.072 0 003.253-3.135C17.605 14.94 19 12.324 19 10a7 7 0 00-7-7zm0 12.05a1 1 0 010 2l-.117-.007A1 1 0 0112 15.05zM9.12 7.7a3.44 3.44 0 016.8.71 3.34 3.34 0 01-2.07 3.18 3.41 3.41 0 01-.49.18.54.54 0 00-.46.52v1.1a.88.88 0 01-.87.92l-.11-.007a.89.89 0 01-.78-.863v-1.31a1.91 1.91 0 011.61-2c.08-.03.52-.2.64-.27a1.69 1.69 0 10-2.55-1.83v.17a.88.88 0 01-.84.7.89.89 0 01-.88-.71 1.45 1.45 0 010-.49z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default PinLabeling;
