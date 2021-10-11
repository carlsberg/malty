import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function ViewGrid(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.039 13.084l4 .033a3 3 0 012.974 3.025l-.033 4a3 3 0 01-3.025 2.975l-4-.034a3 3 0 01-2.975-3.025l.034-4a3 3 0 013.025-2.974zm-11.999-.1l4 .033a3 3 0 012.975 3.025l-.034 4a3 3 0 01-3.025 2.974l-4-.033a3 3 0 01-2.975-3.025l.034-4a3 3 0 013.025-2.975zm11.982 2.1a1 1 0 00-1.008.991l-.034 4a1 1 0 00.992 1.008l4 .034a1 1 0 001.008-.992l.033-4a1 1 0 00-.991-1.008zm-11.999-.1a1 1 0 00-1.008.99l-.034 4a1 1 0 00.992 1.009l4 .033a1 1 0 001.008-.991l.034-4a1 1 0 00-.992-1.008zm.018-14l4 .033a3 3 0 012.974 3.025l-.033 4a3 3 0 01-3.025 2.975l-4-.034A3 3 0 01.982 7.958l.034-4A3 3 0 014.04.984zm12 0l3.999.034a3 3 0 012.975 3.025l-.034 4a3 3 0 01-3.025 2.974l-4-.033a3 3 0 01-2.974-3.025l.033-4A3 3 0 0116.04.984zm-12.017 2a1 1 0 00-1.009.991l-.033 4a1 1 0 00.992 1.008l4 .034a1 1 0 001.008-.992l.033-4a1 1 0 00-.991-1.008zm12 0a1 1 0 00-1.009.992l-.033 4a1 1 0 00.991 1.008l4 .033a1 1 0 001.008-.991l.034-4a1 1 0 00-.992-1.008z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ViewGrid;
