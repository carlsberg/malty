import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Arrange = ({ dataTestId = 'icon-Arrange', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M9.205 8c.803 0 1.453-.672 1.453-1.5S10.008 5 9.205 5s-1.453.672-1.453 1.5S8.402 8 9.205 8zm0 9c.803 0 1.453.672 1.453 1.5s-.65 1.5-1.453 1.5-1.453-.672-1.453-1.5.65-1.5 1.453-1.5zm4.845 0c.802 0 1.453.672 1.453 1.5s-.65 1.5-1.453 1.5-1.454-.672-1.454-1.5.65-1.5 1.454-1.5zm-4.845-6c.803 0 1.453.672 1.453 1.5s-.65 1.5-1.453 1.5-1.453-.672-1.453-1.5.65-1.5 1.453-1.5zm4.845 0c.802 0 1.453.672 1.453 1.5s-.65 1.5-1.453 1.5-1.454-.672-1.454-1.5.65-1.5 1.454-1.5zm0-6c.802 0 1.453.672 1.453 1.5S14.853 8 14.05 8s-1.454-.672-1.454-1.5.65-1.5 1.454-1.5z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
