import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { Colors } from './Datepicker.types';

export function useColorsMapping() {
  const theme = useContext(ThemeContext) || defaultTheme;
  const mappedColors = useMemo(
    () => ({
      [Colors.DigitalBlack]: theme.colors.colours.default['digital-black'].value,
      [Colors.Transparent]: theme.colors.colours.default.transparent.value,
      [Colors.White]: theme.colors.colours.default.white.value,
      [Colors.InformationArchive]: theme.colors.colours.information.archive.value,
      [Colors.InformationClose]: theme.colors.colours.information.close.value,
      [Colors.InformationDisable]: theme.colors.colours.information.disable.value,
      [Colors.InformationHold]: theme.colors.colours.information.hold.value,
      [Colors.InformationIndirect]: theme.colors.colours.information.indirect.value,
      [Colors.InformationLive]: theme.colors.colours.information.live.value,
      [Colors.InformationMultiple]: theme.colors.colours.information.multiple.value,
      [Colors.InformationNew]: theme.colors.colours.information.new.value,
      [Colors.InformationParked]: theme.colors.colours.information.parked.value,
      [Colors.InformationProspect]: theme.colors.colours.information.prospect.value,
      [Colors.InformationUpdate]: theme.colors.colours.information.update.value,
      [Colors.InformationWholesaler]: theme.colors.colours.information.wholesaler.value,
      [Colors.OverlayDigitalBlack5]: theme.colors.colours.overlay['digital-black'][5].value,
      [Colors.OverlayDigitalBlack10]: theme.colors.colours.overlay['digital-black'][10].value,
      [Colors.OverlayDigitalBlack25]: theme.colors.colours.overlay['digital-black'][25].value,
      [Colors.OverlayDigitalBlack50]: theme.colors.colours.overlay['digital-black'][50].value,
      [Colors.OverlayDigitalBlack75]: theme.colors.colours.overlay['digital-black'][75].value,
      [Colors.OverlayDigitalBlack90]: theme.colors.colours.overlay['digital-black'][90].value,
      [Colors.OverlayWhite5]: theme.colors.colours.overlay.white[5].value,
      [Colors.OverlayWhite10]: theme.colors.colours.overlay.white[10].value,
      [Colors.OverlayWhite25]: theme.colors.colours.overlay.white[25].value,
      [Colors.OverlayWhite50]: theme.colors.colours.overlay.white[50].value,
      [Colors.OverlayWhite75]: theme.colors.colours.overlay.white[75].value,
      [Colors.OverlayWhite90]: theme.colors.colours.overlay.white[90].value,
      [Colors.Support20]: theme.colors.colours.support[20].value,
      [Colors.Support40]: theme.colors.colours.support[40].value,
      [Colors.Support60]: theme.colors.colours.support[60].value,
      [Colors.Support80]: theme.colors.colours.support[80].value,
      [Colors.Support100]: theme.colors.colours.support[100].value,
      [Colors.SystemAlertLight]: theme.colors.colours.system['alert-light'].value,
      [Colors.SystemAlertStrong]: theme.colors.colours.system['alert-strong'].value,
      [Colors.SystemDisableLightTheme]: theme.colors.colours.system['disable-light-theme'].value,
      [Colors.SystemDisableDarkTheme]: theme.colors.colours.system['disable-dark-theme'].value,
      [Colors.SystemFail]: theme.colors.colours.system.fail.value,
      [Colors.SystemFailLight]: theme.colors.colours.system['fail-light'].value,
      [Colors.SystemNotificationLight]: theme.colors.colours.system['notification-light'].value,
      [Colors.SystemNotificationStrong]: theme.colors.colours.system['notification-strong'].value,
      [Colors.SystemSuccess]: theme.colors.colours.system.success.value,
      [Colors.SystemSuccessLight]: theme.colors.colours.system['success-light'].value
    }),
    [theme]
  );

  return mappedColors;
}
