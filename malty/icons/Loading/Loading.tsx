import { BaseIcon, BaseIconProps, IconColor } from '@carlsberggroup/malty.atoms.base-icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const Loading = (props: BaseIconProps) => {
  const { color } = props;
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <BaseIcon {...props}>
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z"
          fill={
            color === IconColor.DigitalBlack
              ? theme.colors.colours.default.white.value
              : theme.colors.colours.default['digital-black'].value
          }
        />
        <path d="M12 2c5.43 0 9.848 4.327 9.996 9.72L22 12h-2a8 8 0 00-7.75-7.996L12 4z" />
      </g>
    </BaseIcon>
  );
};
