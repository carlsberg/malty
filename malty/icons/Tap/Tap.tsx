import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Tap = ({ dataTestId = 'icon-Tap', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M16.874 13a4.002 4.002 0 01-6.461 2.05H8.05V21a1 1 0 01-1.993.117L6.05 21v-5.95a2 2 0 011.85-1.995l.15-.005h1.09A4.005 4.005 0 019.125 11H7a3 3 0 00-2.995 2.824L4 14v7a1 1 0 01-1.993.117L2 21v-7a5 5 0 014.783-4.995L7 9h3.354a4.01 4.01 0 01.707-.5l-1.033-4.265a1 1 0 01-.027-.273c.057-1.526 1.224-2.776 2.771-2.948l.154-.011.112-.002a3.08 3.08 0 012.961 2.961 1 1 0 01-.027.273l-1.033 4.266a4.008 4.008 0 011.935 2.5L17 11a3 3 0 012.995 2.824L20 14v2a1 1 0 01-1.993.117L18 16v-2a1 1 0 00-.883-.993L17 13zM13 10a2 2 0 100 4 2 2 0 000-4zm-.003-6.998l-.04.003a1.08 1.08 0 00-.922.794l-.026.124.994 4.076.986-4.076a1.079 1.079 0 00-.908-.913z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
