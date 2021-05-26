import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Badge(props: IconInterface) {
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
        <circle cx={12.5} cy={12.5} fill="#4b87c5" r={10.5} />
        <text
          fill="#fff"
          fontFamily="Montserrat-Bold, Montserrat"
          fontSize={10}
          fontWeight="bold"
          letterSpacing={0.046}
        >
          <tspan x={9.177} y={16}>
            {"8"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Badge;

