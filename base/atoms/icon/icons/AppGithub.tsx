import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function AppGithub(props: IconInterface) {
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
          d="M12 3a9 9 0 00-9 9 9.334 9.334 0 006.891 9v-2.983a2.16 2.16 0 01-1.144 0 2.224 2.224 0 01-1.286-1.054c-.205-.334-.565-.72-.938-.682l-.103-1.054c.825-.002 1.58.46 1.954 1.196.133.277.375.487.669.578.294.085.608.062.887-.064.08-.478.294-.924.617-1.286A4.011 4.011 0 017.54 9.107a.103.103 0 000-.103 3.471 3.471 0 01.102-2.301c.73.037 1.43.297 2.006.746l.244.154c.103.064.078 0 .18 0A7.894 7.894 0 0112 7.346a8.19 8.19 0 011.916.27h.154c1.826-1.106 1.761-.746 2.25-.9.293.733.33 1.544.103 2.301a4.333 4.333 0 01.72 4.05 4.191 4.191 0 01-3.652 2.572c.429.44.664 1.031.656 1.645V21A9.334 9.334 0 0021 12a9 9 0 00-9-9z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default AppGithub;
