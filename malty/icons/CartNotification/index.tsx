import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const CartNotification = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      d="M8.01 18.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5.11 3a1 1 0 01.94.656l.032.11L6.861 7h7.149a1 1 0 01.117 1.993L14.01 9H7.343l1.445 6h8.43l.822-3.283a1 1 0 011.098-.749l.115.022a1 1 0 01.749 1.098l-.022.115-1.01 4.04a1 1 0 01-.857.75L18 17H8a1 1 0 01-.94-.656l-.032-.11L4.32 5H3a1 1 0 01-.993-.883L2 4a1 1 0 01.883-.993L3 3zm13.9 0a3 3 0 110 6 3 3 0 010-6z"
      fillRule="evenodd"
    />
  </BaseIcon>
);

export default CartNotification;
