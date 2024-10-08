import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Mouse = ({ dataTestId = 'icon-Mouse', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M18.027.056c1.663 0 2.993 1.382 2.996 3.075l.021 11.546c.006 5.91-4.403 9.413-8.998 9.38-4.598-.037-8.939-3.494-8.98-9.379L3.043 3.147C3.04 1.448 4.372.057 6.04.057zm0 2H6.04c-.542 0-.996.475-.995 1.086l.021 11.529c.034 4.672 3.405 7.357 6.997 7.386 3.569.026 6.987-2.69 6.982-7.378l-.02-11.544c-.002-.608-.455-1.079-.997-1.079zm-5.959 2.062a1 1 0 01.992.884l.007.117-.006 3.962a1 1 0 01-1.994.114l-.006-.117.006-3.962a1 1 0 011.001-.998z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
