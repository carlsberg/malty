import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const SearchUser = ({ dataTestId = 'icon-SearchUser', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 2a9.5 9.5 0 019.5 9.5 9.46 9.46 0 01-2.112 5.973l3.82 3.82a1 1 0 01-1.415 1.414l-3.82-3.82A9.46 9.46 0 0111.5 21a9.5 9.5 0 010-19zm0 12.45c-1.64 0-3.07 1.658-3.2 3.835a7.477 7.477 0 003.2.715c1.145 0 2.23-.256 3.2-.715-.13-2.177-1.56-3.835-3.2-3.835zM11.5 4a7.5 7.5 0 00-5.042 13.053c.349-1.583 1.216-2.93 2.388-3.75a4.16 4.16 0 115.308.001c1.172.819 2.04 2.166 2.388 3.748A7.5 7.5 0 0011.5 4zm0 3.94a2.16 2.16 0 100 4.32 2.16 2.16 0 000-4.32z" />
    </g>
  </BaseIcon>
);
