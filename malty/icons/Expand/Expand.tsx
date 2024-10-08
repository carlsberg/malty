import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Expand = ({ dataTestId = 'icon-Expand', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M4 11.929a1 1 0 01.993.883L5 12.93v4.658l4.071-4.072a1 1 0 011.327-.078l.087.078a1 1 0 01.083 1.32l-.083.094L6.415 19 11.07 19a1 1 0 01.992.875l.008.125a1 1 0 01-.883.993L11.07 21H4a1 1 0 01-.993-.883L3 20v-7.071a1 1 0 011-1zM20 3a1 1 0 01.993.883L21 4v7.071a1 1 0 01-1.993.117L19 11.07V6.406l-4.073 4.073a1 1 0 01-1.327.078l-.087-.078a1 1 0 01-.083-1.32l.083-.094L17.577 5H12.93a1 1 0 01-.992-.875L11.929 4a1 1 0 01.883-.993L12.93 3z" />
    </g>
  </BaseIcon>
);
