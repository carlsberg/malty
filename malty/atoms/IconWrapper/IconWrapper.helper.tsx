import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconColor, UseIconColorProps, UseNumSizeProps } from './IconWrapper.types';

export const useIconColor = ({ color }: UseIconColorProps): string => {
  const theme = useContext(ThemeContext) || defaultTheme;

  if (
    color === IconColor.Alert ||
    color === IconColor.AlertLight ||
    color === IconColor.DisableDark ||
    color === IconColor.DisableLight ||
    color === IconColor.Fail ||
    color === IconColor.FailLight ||
    color === IconColor.Notification ||
    color === IconColor.NotificationLight ||
    color === IconColor.Success ||
    color === IconColor.SuccessLight
  ) {
    return theme.colors.colours.system[color].value;
  }
  if (
    color === IconColor.Support20 ||
    color === IconColor.Support40 ||
    color === IconColor.Support60 ||
    color === IconColor.Support80 ||
    color === IconColor.Support100
  ) {
    return theme.colors.colours.support[color].value;
  }
  if (color === IconColor.Primary || color === IconColor.Secondary || color === IconColor.Tertiary) {
    return theme.colors.theme[color].value;
  }
  return theme.colors.colours.default[color].value;
};

export const useNumSize = ({ size }: UseNumSizeProps): string => {
  const theme = useContext(ThemeContext);
  return theme.sizes[size].value;
};
