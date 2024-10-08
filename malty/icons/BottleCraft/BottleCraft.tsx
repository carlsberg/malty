import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const BottleCraft = ({ dataTestId = 'icon-BottleCraft', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3v4c0 .49-.472 1.23-1.802 2.87C5.49 11.98 4.95 12.825 4.95 14v5a2.997 2.997 0 00.87 2.124c.59.586 1.387.9 2.21.876H16a3 3 0 003-3v-5c0-1.173-.534-2.018-2.22-4.125C15.467 8.232 15 7.494 15 7V3a1 1 0 00-1-1h-4a1 1 0 00-1 1zm2 1h2v3c0 1.173.534 2.018 2.22 4.125C16.533 12.768 17 13.506 17 14v5a1 1 0 01-1 1H8a1.02 1.02 0 01-.765-.29.996.996 0 01-.285-.704V14c0-.49.472-1.23 1.802-2.87C10.46 9.02 11 8.175 11 7z" />
    </g>
  </BaseIcon>
);
