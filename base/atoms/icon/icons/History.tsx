import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function History(props: IconInterface) {
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
          d="M12.5 2a9.5 9.5 0 010 19 1 1 0 010-2A7.5 7.5 0 105 11.5l.001-.117 1.092-1.09a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-2.8 2.8a1 1 0 01-1.414 0l-2.8-2.8a1 1 0 011.414-1.414l1.094 1.093A9.5 9.5 0 0112.5 2zm-.49 4.67a1 1 0 011 1V12h2a1 1 0 01.993.883l.007.117a1 1 0 01-1 1h-3a1 1 0 01-1-1V7.67a1 1 0 011-1z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default History;
