import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function CalendarAutumn(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.015 12.033a1 1 0 110 2 2 2 0 00-.15 3.995l.15.005h8.015a1 1 0 01.117 1.993l-.117.007H5.015a4 4 0 110-8zm10-8a5.002 5.002 0 014.888 3.941l.035.183.047.012a4.003 4.003 0 013.025 3.681l.005.2a4 4 0 01-4 4h-8a4 4 0 01-.97-7.881l.046-.012.036-.183a5.003 5.003 0 014.671-3.936zm0 2a3 3 0 00-3 3l-.007.134a1 1 0 01-.993.883 2 2 0 100 4h8a2 2 0 000-4 1 1 0 01-1-1l-.005-.193a3 3 0 00-2.995-2.824z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default CalendarAutumn;
