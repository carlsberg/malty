import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  ForegroundCircleColor,
  PieChartProps,
  PiePercentageAndLabelProps,
  RoundMethod,
  RoundPercentageProps,
  SegmentColorProps
} from './ProgressCircle.types';

export const pxToInt = (value: string) => parseInt(value.replace(/px/g, ''), 10);

/**
 * @see https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/#svg-solution
 */
export const usePieChart = ({ diameter, percentage }: PieChartProps) => {
  const pieRadius = diameter / 2;
  const baseRadius = pieRadius / 2;
  const fullCircleLength = 2 * Math.PI * baseRadius;
  const segmentLength = (percentage * fullCircleLength) / 100;

  return { baseRadius, fullCircleLength, pieRadius, segmentLength };
};

export const usePiePercentageAndLabel = ({ errorLabel, percentage }: PiePercentageAndLabelProps) => {
  let piePercentage: number;
  let label = `${percentage}%`;

  if (Number.isNaN(percentage)) {
    piePercentage = 0;
    label = errorLabel;
  } else if (percentage > 100) {
    piePercentage = 100;
  } else if (percentage < 0) {
    piePercentage = 0;
  } else {
    piePercentage = percentage;
  }

  return { piePercentage, label };
};

export const useRoundPercentage = ({ percentage, roundMethod }: RoundPercentageProps) => {
  const mappedMethods: Record<RoundMethod, (x: number) => number> = {
    [RoundMethod.Down]: Math.floor,
    [RoundMethod.Round]: Math.round,
    [RoundMethod.Up]: Math.ceil
  };

  return mappedMethods[roundMethod](percentage);
};

export const useSegmentColor = ({ foregroundColor }: SegmentColorProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const mappedColors: Record<ForegroundCircleColor, string> = {
    [ForegroundCircleColor.Close]: theme.colors.colours.information.close.value,
    [ForegroundCircleColor.DigitalBlack]: theme.colors.colours.default['digital-black'].value,
    [ForegroundCircleColor.Hold]: theme.colors.colours.information.hold.value,
    [ForegroundCircleColor.Live]: theme.colors.colours.information.live.value,
    [ForegroundCircleColor.Multiple]: theme.colors.colours.information.multiple.value,
    [ForegroundCircleColor.Notification]: theme.colors.colours.system['notification-strong'].value,
    [ForegroundCircleColor.Parked]: theme.colors.colours.information.parked.value,
    [ForegroundCircleColor.Support80]: theme.colors.colours.support['80'].value,
    [ForegroundCircleColor.Support100]: theme.colors.colours.support['100'].value,
    [ForegroundCircleColor.ThemePrimary]: theme.colors.theme.themePrimary.value,
    [ForegroundCircleColor.ThemeSecondary]: theme.colors.theme.themeSecondary.value,
    [ForegroundCircleColor.Update]: theme.colors.colours.information.update.value
  };

  return mappedColors[foregroundColor];
};
