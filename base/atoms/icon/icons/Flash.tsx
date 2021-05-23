import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Flash(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.015 1l9.008.032a1 1 0 01.792 1.606L13.97 9l4.991.037c.846.006 1.287.983.78 1.618l-.075.085L7.699 22.86c-.779.789-2.07-.085-1.629-1.1l3.369-7.748H5a1 1 0 01-.973-1.233l.033-.11L8.071 1.659A1 1 0 019.015 1zm.695 2.001l-3.282 9.011h4.537a1 1 0 01.958 1.288l-.041.11-1.839 4.229 6.536-6.621-4.622-.033a1 1 0 01-.85-1.515l.061-.09 4.838-6.356z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Flash;
