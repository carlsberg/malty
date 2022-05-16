import { IconColor, IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Loading = (props: IconWrapperProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z"
        fill={
          props.color === IconColor.DigitalBlack
            ? theme.colors.colours.default.white.value
            : theme.colors.colours.default['digital-black'].value
        }
      />
      <path d="M12 2c5.43 0 9.848 4.327 9.996 9.72L22 12h-2a8 8 0 00-7.75-7.996L12 4z" />
    </g>
  );
};

export default Loading;
