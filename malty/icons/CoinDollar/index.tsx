import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const CoinDollar = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      d="M12 1a1 1 0 01.993.883L13 2l.001 1.1A5.002 5.002 0 0117 8a1 1 0 01-1.993.117L15 8a3.001 3.001 0 00-2-2.829l.001 5.93a5.002 5.002 0 010 9.799L13 22a1 1 0 01-1.993.117L11 22v-1.1A5.002 5.002 0 017 16a1 1 0 012 0c0 1.306.835 2.418 2 2.83V12.9a5.002 5.002 0 010-9.8V2a1 1 0 011-1zm1 12.171v5.658a3.001 3.001 0 000-5.658zM9 8c0 1.306.835 2.418 2 2.83V5.17A3.001 3.001 0 009 8z"
      fillRule="evenodd"
    />
  </BaseIcon>
);

export default CoinDollar;
