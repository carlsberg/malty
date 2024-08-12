import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconColor } from './BaseIcon.types';

export const useIconColor = (color: IconColor): string => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { colours, theme: themeColors } = theme.colors;

  switch (color) {
    case IconColor.Alert:
    case IconColor.AlertLight:
    case IconColor.DisableDark:
    case IconColor.DisableLight:
    case IconColor.Fail:
    case IconColor.FailLight:
    case IconColor.Notification:
    case IconColor.NotificationLight:
    case IconColor.Success:
    case IconColor.SuccessLight:
      return colours.system[color].value;

    case IconColor.Support20:
    case IconColor.Support40:
    case IconColor.Support60:
    case IconColor.Support80:
    case IconColor.Support100:
      return colours.support[color].value;

    case IconColor.Primary:
    case IconColor.Secondary:
    case IconColor.Tertiary:
      return themeColors[color].value;

    default:
      return colours.default[color].value;
  }
};
