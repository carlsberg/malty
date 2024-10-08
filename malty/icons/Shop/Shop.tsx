import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Shop = ({ dataTestId = 'icon-Shop', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19.999 1a1 1 0 01.857.486l3 5 .024.041.017.033-.041-.074c.03.051.057.104.077.157l.01.027c.042.117.06.237.057.355L23.998 11a1 1 0 01-1 1v10a1 1 0 01-1 1H2.002a1 1 0 01-1-1V12a1 1 0 01-1-1V7.025a.978.978 0 01.056-.355l.01-.028a.77.77 0 01.024-.055l.012-.027a.997.997 0 01.041-.074l3-5A1 1 0 014 1zm1 11H3v9H13v-4a3 3 0 116 0v4h2zm-5 4a1 1 0 00-1 1v4h2v-4a1 1 0 00-1-1zm-7.998-3a3 3 0 013 3v2.5a1 1 0 01-1 1H6a1 1 0 01-1-1V16a3 3 0 013-3zm0 2a1 1 0 00-1 1v1.5h2V16a1 1 0 00-1-1zM5 8H2.001v2H5zm6 0H7v2h4zm10.999 0h-3v2h3zm-5 0h-4v2h4zM6.523 3H4.567l-1.8 3h2.556zM11 3H8.677l-1.2 3H11zm8.433 0h-1.957l1.2 3h2.557zm-4.111 0h-2.323v3h3.523z" />
    </g>
  </BaseIcon>
);
