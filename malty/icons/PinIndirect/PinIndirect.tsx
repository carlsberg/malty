import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const PinIndirect = ({ dataTestId = 'icon-PinIndirect', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14 0a1 1 0 011 1v5c0 .572.187.978.832 1.945C16.687 9.228 17 9.905 17 11.01l-.05 5.481V21a3 3 0 01-3 3h-4a3 3 0 01-3-3V11c0-1.1.321-1.779 1.2-3.064C8.808 6.97 9 6.566 9 6V1a1 1 0 011-1zm-1 2h-2v4c0 1.1-.321 1.779-1.2 3.064-.659.965-.85 1.37-.85 1.936v10a1 1 0 001 1h4a1 1 0 001-1v-4.52L15 11c0-.572-.187-.978-.832-1.945C13.313 7.772 13 7.095 13 6zM.293 11.333a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414zm19 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414z" />
    </g>
  </BaseIcon>
);
