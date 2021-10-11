import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function CoinEuro(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3c2.782 0 5.207 2.063 6.337 5.16a1 1 0 01-1.879.686C15.594 6.479 13.857 5 12 5 9.828 5 7.902 7.012 7.242 9.851h4.849c.502 0 .909.448.909 1 0 .513-.35.936-.803.994l-.106.007L7 11.85a9.935 9.935 0 00.047 1.122h5.043c.502 0 .909.448.909 1 0 .513-.35.936-.803.994l-.106.007H7.477C8.289 17.37 10.045 19 12 19c1.832 0 3.548-1.438 4.425-3.754a1 1 0 011.87.708C17.145 18.99 14.746 21 12 21c-3.107 0-5.668-2.54-6.611-6.026h-1.48c-.502 0-.909-.448-.909-1 0-.513.35-.936.803-.994l.106-.006H5.04C5.014 12.654 5 12.329 5 12l.002-.149H3.909c-.502 0-.909-.447-.909-1 0-.512.35-.935.803-.993l.106-.006H5.2C5.94 5.948 8.654 3 12 3z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default CoinEuro;
