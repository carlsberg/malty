import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const CheckboxCheckOutline = ({ dataTestId = 'icon-CheckboxCheckOutline', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M16.6 7.99999C17.0418 8.33136 17.1314 8.95816 16.8 9.39999L12 15.8C11.8261 16.0319 11.5601 16.1769 11.2709 16.1975C10.9817 16.218 10.6979 16.1121 10.4929 15.9071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11.0918 13.6776L15.2 8.19999C15.5314 7.75816 16.1582 7.66861 16.6 7.99999Z" />
      <path d="M6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" />
    </g>
  </BaseIcon>
);
