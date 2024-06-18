import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const Twitter = ({ dataTestId = 'icon-Twitter', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 6.781a8.48 8.48 0 01-2.232.602 3.863 3.863 0 001.71-2.095 8.07 8.07 0 01-2.47.914 3.953 3.953 0 00-4.268-.936c-1.484.573-2.458 1.973-2.454 3.53a3.39 3.39 0 00.095.856c-3.129-.143-6.046-1.584-8.015-3.96a3.657 3.657 0 00-.535 1.911 3.75 3.75 0 001.722 3.15 3.96 3.96 0 01-1.757-.464c.002 1.805 1.308 3.359 3.123 3.717-.333.09-.677.133-1.021.127a3.87 3.87 0 01-.737-.058c.517 1.54 1.972 2.598 3.634 2.64A8.164 8.164 0 012 18.3a11.312 11.312 0 0011.276.374c3.546-1.893 5.752-5.52 5.753-9.463v-.486A7.587 7.587 0 0021 6.781z" />
    </g>
  </BaseIcon>
);
