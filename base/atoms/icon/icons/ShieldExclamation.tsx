import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function ShieldExclamation(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.709.086a1 1 0 01.657 0l9.01 3.132a1 1 0 01.67.876l.023.61c.021.991-.022 2.203-.17 3.561-.243 2.228-.728 4.426-1.516 6.493-1.556 4.083-4.135 7.255-7.927 9.11a1 1 0 01-.873.003c-3.845-1.849-6.437-5.03-7.973-9.132-1.336-3.567-1.715-7.251-1.582-10.29l.02-.367a1 1 0 01.669-.864zm.329 2.002L4.014 4.883l-.003.078c-.066 2.57.27 5.626 1.295 8.585l.177.492c1.273 3.398 3.32 6.038 6.292 7.682l.237.127.255-.138c2.81-1.587 4.801-4.082 6.095-7.276l.152-.387c.722-1.894 1.171-3.929 1.397-5.998.122-1.124.168-2.138.163-2.987l-.003-.181zm-.067 12.885a1 1 0 110 2 1 1 0 010-2zm.03-8.031a1 1 0 011 1l-.03 4.942a1 1 0 11-2 0l.03-4.942a1 1 0 011-1z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ShieldExclamation;
