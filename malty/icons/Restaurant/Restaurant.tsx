import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Restaurant = ({ dataTestId = 'icon-Restaurant', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M8.006 2A1 1 0 019 2.883L9.006 3v6.862h.136a.94.94 0 00.642-.323.957.957 0 00.225-.625l-.003-.134V3.02A1 1 0 0112 2.903l.007.117-.003 5.685a2.94 2.94 0 01-.703 2.138 2.945 2.945 0 01-1.874.995l-.21.022-.21-.001V22.02a1 1 0 01-1.993.117l-.007-.117V11.857h-.285C5.17 11.74 3.99 10.441 4 8.965l.005-.165V3.02A1 1 0 016 2.903l.007.117-.002 5.845c-.03.474.296.89.692.98l.1.015.21-.001V3a1 1 0 011-1zm11.93 20.02a1 1 0 01-1.993.117l-.007-.117v-6.371l-2.5.001a1.36 1.36 0 01-1.354-1.229l-.006-.131V6.76c0-1.898 1.536-3.34 3.797-4.596a1.41 1.41 0 012.054 1.098l.01.148zm-2-17.554l-.13.09c-.986.691-1.644 1.43-1.722 2.076l-.008.128v6.889h1.86z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
