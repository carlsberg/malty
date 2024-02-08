import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Connected = ({ dataTestId = 'icon-Connected', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M14.69 17.233a1 1 0 11-1.38 1.446c-.948-.905-1.672-.905-2.62 0a1 1 0 11-1.38-1.446c1.719-1.644 3.661-1.644 5.38 0zm2.966-4.058a1 1 0 01-1.312 1.51 6.62 6.62 0 00-8.688 0 1 1 0 01-1.312-1.51 8.62 8.62 0 0111.312 0zm-1.471-6.54c1.251.386 2.428.982 3.472 1.755a8.63 8.63 0 012.42 2.692 1 1 0 11-1.734.996 6.644 6.644 0 00-1.869-2.075 9.573 9.573 0 00-2.88-1.458 12.121 12.121 0 00-7.19 0 9.588 9.588 0 00-2.887 1.465 6.63 6.63 0 00-1.86 2.068 1 1 0 01-1.734-.996 8.616 8.616 0 012.411-2.685 11.567 11.567 0 013.48-1.762 14.119 14.119 0 018.37 0z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
