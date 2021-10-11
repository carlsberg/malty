import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function AppPowerbi(props: IconInterface) {
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
          d="M14.705 8.705C15.42 8.705 16 9.285 16 10v11.13h-.08a1.29 1.29 0 01-1.29 1.28 1.28 1.28 0 01-1.22-1.28V10c0-.715.58-1.295 1.295-1.295zM11 10.1a1.26 1.26 0 011.29 1.29v8.39h-.04A1.31 1.31 0 0111 21.07a1.21 1.21 0 01-1.23-1.29v-8.39c0-.69.541-1.258 1.23-1.29zM5.64 1.81l15 4.53a2.14 2.14 0 011.47 2v10.21a2.15 2.15 0 01-.86 1.72 4.12 4.12 0 01-1.23.31H20a2.65 2.65 0 01-.67-.13L17.76 20a.45.45 0 01-.31-.61.46.46 0 01.61-.31l1.6.49a1 1 0 001-.18 1 1 0 00.43-.86V8.26a1.07 1.07 0 00-.74-1l-15-4.53a1.15 1.15 0 00-1 .12 1.33 1.33 0 00-.43.92v7a.48.48 0 01-.49.49.48.48 0 01-.49-.49v-7a2 2 0 01.86-1.65 2 2 0 011.84-.31zm1.64 9.7a1.26 1.26 0 011.29 1.29v5.51a1.3 1.3 0 01-1.29 1.29A1.26 1.26 0 016 18.31V12.8a1.29 1.29 0 011.28-1.29zm-3.735 1.393c.668 0 1.226.511 1.285 1.177v3a1.29 1.29 0 01-1.28 1.29 1.26 1.26 0 01-1.29-1.29v-3a1.29 1.29 0 011.285-1.177z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default AppPowerbi;
