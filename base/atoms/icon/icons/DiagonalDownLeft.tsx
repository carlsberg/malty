import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function DiagonalDownLeft(props: IconInterface) {
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
          d="M16.953 5.633a1 1 0 011.414 1.414L8.755 16.66l6.075.001a1 1 0 01.993.883l.007.117a1 1 0 01-1 1H6.34a1.02 1.02 0 01-.484-.125.878.878 0 01-.111-.071.999.999 0 01-.112-.097l.09.08a1.006 1.006 0 01-.383-.787l.004.09a1.006 1.006 0 01-.004-.07V9.17a1 1 0 112 0l-.001 6.075z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default DiagonalDownLeft;
