import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface DatepickerProps extends SpaceProps {
  label?: string;
  startDate: Date | null;
  onChange: (date: (Date | null) | [Date | null, Date | null]) => void;
  onClose?: () => void;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  excludeDates?: Date[];
  placeholderText?: string;
  selectsRange?: boolean;
  endDate?: Date | null;
  inline?: boolean;
  dateFormat?: string;
  readOnly?: boolean;
  required?: boolean;
  captions?: Caption[];
  primaryAction?: Action;
  secondaryAction?: Action;
  shouldCloseOnSelect?: boolean;
  size?: DatepickerSize;
  dataTestId?: string;
  withPortal?: boolean;
  withoutBorder?: boolean;
}

export enum DatepickerSize {
  Medium = 'Medium',
  Large = 'Large'
}
export type Caption = {
  color: Colors;
  label: string;
  borderColor?: Colors;
  dotted?: boolean;
};

export type Action = {
  label: string;
  action?: () => void;
};

export enum Colors {
  DigitalBlack = 'theme.colors.colours.default.digital-black',
  Transparent = 'theme.colors.colours.default.transparent',
  White = 'theme.colors.colours.default.white',
  InformationArchive = 'theme.colors.colours.information.archive',
  InformationClose = 'theme.colors.colours.information.close',
  InformationDisable = 'theme.colors.colours.information.disable',
  InformationHold = 'theme.colors.colours.information.hold',
  InformationIndirect = 'theme.colors.colours.information.indirect',
  InformationLive = 'theme.colors.colours.information.live',
  InformationMultiple = 'theme.colors.colours.information.multiple',
  InformationNew = 'theme.colors.colours.information.new',
  InformationParked = 'theme.colors.colours.information.parked',
  InformationProspect = 'theme.colors.colours.information.prospect',
  InformationUpdate = 'theme.colors.colours.information.update',
  InformationWholesaler = 'theme.colors.colours.information.wholesaler',
  OverlayDigitalBlack5 = "theme.colors.colours.overlay['digital-black'][5]",
  OverlayDigitalBlack10 = "theme.colors.colours.overlay['digital-black'][10]",
  OverlayDigitalBlack25 = "theme.colors.colours.overlay['digital-black'][25]",
  OverlayDigitalBlack50 = "theme.colors.colours.overlay['digital-black'][50]",
  OverlayDigitalBlack75 = "theme.colors.colours.overlay['digital-black'][75]",
  OverlayDigitalBlack90 = "theme.colors.colours.overlay['digital-black'][90]",
  OverlayWhite5 = 'theme.colors.colours.overlay.white[5]',
  OverlayWhite10 = 'theme.colors.colours.overlay.white[10]',
  OverlayWhite25 = 'theme.colors.colours.overlay.white[25]',
  OverlayWhite50 = 'theme.colors.colours.overlay.white[50]',
  OverlayWhite75 = 'theme.colors.colours.overlay.white[75]',
  OverlayWhite90 = 'theme.colors.colours.overlay.white[90]',
  Support20 = 'theme.colors.colours.support[20]',
  Support40 = 'theme.colors.colours.support[40]',
  Support60 = 'theme.colors.colours.support[60]',
  Support80 = 'theme.colors.colours.support[80]',
  Support100 = 'theme.colors.colours.support[100]',
  SystemAlertLight = "theme.colors.colours.system['alert-light']",
  SystemAlertStrong = "theme.colors.colours.system['alert-strong']",
  SystemDisableLightTheme = "theme.colors.colours.system['disable-light-theme']",
  SystemDisableDarkTheme = "theme.colors.colours.system['disable-dark-theme']",
  SystemFail = 'theme.colors.colours.system.fail',
  SystemFailLight = "theme.colors.colours.system['fail-light']",
  SystemNotificationLight = "theme.colors.colours.system['notification-light']",
  SystemNotificationStrong = "theme.colors.colours.system['notification-strong']",
  SystemSuccess = 'theme.colors.colours.system.success',
  SystemSuccessLight = "theme.colors.colours.system.system['success-light']"
}
