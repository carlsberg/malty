import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Attachment = ({ dataTestId = 'icon-Attachment', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M4.927 13.408l7.78-7.77c1.549-1.423 3.991-1.37 5.507.147s1.564 3.96.11 5.537l-8.092 8.101a2.535 2.535 0 01-3.585-3.586l7.43-7.43a1.001 1.001 0 011.416 1.416l-7.08 7.07a1 1 0 101.414 1.415l7.08-7.07a3.001 3.001 0 10-4.244-4.245l-7.43 7.43a4.536 4.536 0 006.414 6.414l8.12-8.13c2.209-2.395 2.135-6.059-.138-8.335a6 6 0 00-8.306-.178l-7.81 7.798a1 1 0 001.414 1.416z" />
    </g>
  </BaseIcon>
);
