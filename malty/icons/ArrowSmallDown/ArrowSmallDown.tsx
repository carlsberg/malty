import { BaseIcon, BaseIconProps } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';

export const ArrowSmallDown = ({ dataTestId = 'icon-ArrowSmallDown', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a1 1 0 011 1v13.585l4.293-4.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-6 6A1.006 1.006 0 0112 21l.085-.004a1.006 1.006 0 01-.052.003L12 21a1.018 1.018 0 01-.52-.146 1.035 1.035 0 01-.187-.147l.09.08a1.006 1.006 0 01-.09-.08l-6-6a1 1 0 011.414-1.414L11 17.585V4a1 1 0 01.883-.993z" />
    </g>
  </BaseIcon>
);
