import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Eye = ({ dataTestId = 'icon-Eye', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M.16 12.385L0 12l.16-.385C2.385 6.245 6.497 3 12 3s9.615 3.245 11.84 8.615L24 12l-.16.385C21.615 17.755 17.503 21 12 21S2.385 17.755.16 12.385zM12 19c4.506 0 7.879-2.563 9.843-7C19.879 7.563 16.506 5 12 5s-7.879 2.563-9.843 7c1.964 4.437 5.337 7 9.843 7zm-3.972-7C8.028 9.786 9.8 8 12 8s3.972 1.786 3.972 4S14.2 16 12 16s-3.972-1.786-3.972-4zm1.986 0a1.986 1.986 0 103.972 0 1.986 1.986 0 10-3.972 0z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
