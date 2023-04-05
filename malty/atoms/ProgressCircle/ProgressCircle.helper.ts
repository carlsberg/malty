import {
  DegreeValueAndLabelProps,
  ForegroundCircleColor,
  RoundMethod,
  RoundPercentageProps,
  SegmentColorProps
} from './ProgressCircle.types';

export const useRoundPercentage = ({ percentage, roundMethod }: RoundPercentageProps) => {
  const mappedMethods: Record<RoundMethod, (x: number) => number> = {
    [RoundMethod.Down]: Math.floor,
    [RoundMethod.Round]: Math.round,
    [RoundMethod.Up]: Math.ceil
  };

  return mappedMethods[roundMethod](percentage);
};

export const useDegreeValueAndLabel = ({ percentage, errorLabel }: DegreeValueAndLabelProps) => {
  let displayPercentage: number;
  let label = `${Math.abs(percentage)}%`;

  if (Number.isNaN(percentage)) {
    displayPercentage = 0;
    label = errorLabel;
  } else if (percentage > 100) {
    displayPercentage = 100;
  } else if (percentage < 0) {
    displayPercentage = 0;
  } else {
    displayPercentage = percentage;
  }
  const degreeValue = `${displayPercentage * 3.6}deg`;

  return { degreeValue, label };
};

export const useSegmentColor = ({ foregroundColor, theme }: SegmentColorProps) => {
  const mappedColors: Record<ForegroundCircleColor, string> = {
    [ForegroundCircleColor.DigitalBlack]: theme.colors.colours.default['digital-black'].value,
    [ForegroundCircleColor.Close]: theme.colors.colours.information.close.value,
    [ForegroundCircleColor.Hold]: theme.colors.colours.information.hold.value,
    [ForegroundCircleColor.Live]: theme.colors.colours.information.live.value,
    [ForegroundCircleColor.Multiple]: theme.colors.colours.information.multiple.value,
    [ForegroundCircleColor.Parked]: theme.colors.colours.information.parked.value,
    [ForegroundCircleColor.Update]: theme.colors.colours.information.update.value,
    [ForegroundCircleColor.Notification]: theme.colors.colours.system['notification-strong'].value,
    [ForegroundCircleColor.Support80]: theme.colors.colours.support['80'].value,
    [ForegroundCircleColor.Support100]: theme.colors.colours.support['100'].value,
    [ForegroundCircleColor.ThemePrimary]: theme.colors.theme.themePrimary.value,
    [ForegroundCircleColor.ThemeSecondary]: theme.colors.theme.themeSecondary.value
  };

  return mappedColors[foregroundColor];
};
