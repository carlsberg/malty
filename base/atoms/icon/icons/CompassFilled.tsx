import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function CompassFilled(props: IconInterface) {
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
          d="M12.955 1.702l6.001 19.2c.295.943-.808 1.696-1.579 1.08l-5.376-4.301-5.376 4.3c-.77.617-1.874-.136-1.58-1.078l6.002-19.201c.292-.936 1.616-.936 1.908 0z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default CompassFilled;
