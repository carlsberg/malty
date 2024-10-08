import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const ThumbUp = ({ dataTestId = 'icon-ThumbUp', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M3 21.003v-11l3.353-.001 2.997-5.44c.766-1.24 1.837-1.809 3.057-1.461 1.212.345 1.765 1.376 1.672 2.772l-.013.136-.008 2.096h5.1c1.506 0 2.747 1.156 2.837 2.625l.005.171c0 .103-.006.205-.017.307l-.022.153-1.226 7.244c-.22 1.3-1.323 2.31-2.632 2.392l-.171.006zm8.153-15.551l-.076.117L8 11.157v7.846h9.932c.356 0 .695-.268.805-.623l.026-.109 1.226-7.244A.752.752 0 0020 10.9c0-.4-.316-.74-.735-.79l-.107-.006h-5.206a1.9 1.9 0 01-1.888-1.758L12.06 8.2l.008-2.235.005-.103c.068-.623-.009-.779-.213-.837-.232-.066-.434.025-.706.428z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
