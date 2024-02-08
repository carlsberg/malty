import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const CartAdded = ({ dataTestId = 'icon-CartAdded', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M8 18.5A1.5 1.5 0 118 21.499 1.5 1.5 0 018 18.5zm10 0A1.5 1.5 0 1118 21.499 1.5 1.5 0 0118 18.5zM5.11 3a1 1 0 01.94.656l.033.11L8.788 15h8.43l1.812-7.243a1 1 0 011.098-.749l.114.022a1 1 0 01.75 1.098l-.022.115-2 8a1 1 0 01-.857.75L18 17H8a1 1 0 01-.94-.656l-.032-.11L4.322 5H3a1 1 0 01-.993-.883L2 4a1 1 0 01.883-.993L3 3zM17.6 4.87a1 1 0 01.269 1.296l-.07.105-3.995 5.329a1 1 0 01-1.418.187l-.09-.08-2.664-2.664a1 1 0 011.32-1.497l.095.083 1.848 1.848L16.2 5.071a1 1 0 011.4-.2z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
