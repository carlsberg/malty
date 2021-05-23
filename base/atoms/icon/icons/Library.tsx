import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Library(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.16 1.021l1.998.017c1.104.01 1.991.91 1.982 2.011l-.15 17.952a1.997 1.997 0 01-2.015 1.978l-1.999-.017A1.997 1.997 0 01-.006 20.95l.15-17.952A1.997 1.997 0 012.16 1.021zm7.986 0l1.998.017a1.997 1.997 0 011.616.844l1.582-.56a1.997 1.997 0 012.55 1.212l5.998 16.92a1.997 1.997 0 01-1.217 2.548l-1.884.668a1.997 1.997 0 01-2.55-1.213l-4.17-11.76-.094 11.304a1.996 1.996 0 01-1.866 1.974l-.149.004-1.998-.017a1.997 1.997 0 01-1.982-2.011l.15-17.952a1.997 1.997 0 012.016-1.978zM2.143 3.016l-.15 17.951 1.998.017.15-17.951zm7.986 0l-.15 17.952 1.998.016.15-17.951zm5.88.186l-1.885.667 5.999 16.92 1.884-.667z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Library;
