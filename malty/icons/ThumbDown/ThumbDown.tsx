import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const ThumbDown = ({ dataTestId = 'icon-ThumbDown', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M22 3v11h-3.353l-2.997 5.44c-.766 1.241-1.837 1.81-3.057 1.462-1.212-.345-1.765-1.376-1.672-2.773l.013-.135.008-2.096h-5.1c-1.506 0-2.747-1.156-2.837-2.626L3 13.102c0-.103.006-.206.017-.308l.022-.152 1.226-7.245c.22-1.3 1.323-2.31 2.632-2.392L7.068 3zm-8.153 15.55l.076-.117L17 12.846V5H7.068c-.356 0-.695.267-.805.622l-.026.11-1.226 7.244A.752.752 0 005 13.1c0 .4.316.74.735.79l.107.006h5.206a1.9 1.9 0 011.888 1.758l.005.149-.008 2.234-.005.104c-.068.622.009.778.213.836.232.067.434-.025.706-.427z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
