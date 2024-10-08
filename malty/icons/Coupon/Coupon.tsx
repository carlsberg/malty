import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Coupon = ({ dataTestId = 'icon-Coupon', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M15.903 4.076a1 1 0 011.007.582l2.097 4.61c1.334.495 1.96.319 3.185-1.236l.282-.367.8.6c-1.406 1.876-2.379 2.44-3.725 2.192l.923 2.03a1 1 0 01-.044.915l-5.5 9.526a1 1 0 01-1.366.366l-12.124-7a1 1 0 01-.366-1.366l5.5-9.526a1 1 0 01.77-.495zm-.706 14.387l-10.393-6-1.5 2.599 10.393 6zm.189-12.328l-7.34.712-2.242 3.884 10.393 6 2.242-3.884-1.475-3.243c-.511-.13-.976-.18-1.465-.138a2 2 0 11-.223-.985 4.853 4.853 0 011.18.007zM14 8.535a1 1 0 10.463 1.139c-.19.056-.388.124-.597.204l-.24.095-.376-.927c.343-.14.662-.253.965-.343A.969.969 0 0014 8.536z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
