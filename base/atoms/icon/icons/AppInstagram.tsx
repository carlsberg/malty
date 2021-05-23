import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function AppInstagram(props: IconInterface) {
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
          d="M16.037 3A4.963 4.963 0 0121 7.963v8.074A4.963 4.963 0 0116.037 21H7.963A4.963 4.963 0 013 16.037V7.963A4.963 4.963 0 017.963 3zm0 1.594H7.963a3.381 3.381 0 00-3.369 3.369v8.074a3.381 3.381 0 003.369 3.369h8.074a3.381 3.381 0 003.369-3.369V7.963a3.381 3.381 0 00-3.369-3.369zM12 7.36a4.641 4.641 0 110 9.282 4.641 4.641 0 010-9.282zm-.017 1.62A3.047 3.047 0 0012 15.073v-.026A3.06 3.06 0 0015.047 12a3.047 3.047 0 00-3.064-3.021zm4.851-2.97a1.17 1.17 0 010 2.34c-.31 0-.607-.125-.823-.348a1.144 1.144 0 010-1.645c.216-.223.513-.348.823-.347z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default AppInstagram;
