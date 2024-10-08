import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Star = ({ dataTestId = 'icon-Star', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.914 8.75l2.135-6.57c.3-.92 1.603-.92 1.902 0l2.135 6.57H22c.968 0 1.371 1.238.589 1.808l-5.594 4.073 2.136 6.57c.3.921-.755 1.687-1.539 1.118L12 18.256 6.408 22.32c-.784.57-1.839-.197-1.539-1.118l2.136-6.57-5.594-4.073C.63 9.988 1.031 8.75 2 8.75zm1.677 1.31a1 1 0 01-.951.69H5.072l3.697 2.692a1 1 0 01.362 1.117l-1.408 4.333 3.69-2.681a1 1 0 011.175 0l3.69 2.68-1.409-4.332a1 1 0 01.362-1.117l3.697-2.692H14.36a1 1 0 01-.951-.69L12 5.724z" />
    </g>
  </BaseIcon>
);
