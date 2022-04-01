import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  CLOSE_TOOLTIP_EVENT,
  OPEN_TOOLTIP_EVENT,
  START_TOOLTIP_TIMER_EVENT,
  TooltipPositionToInnerMapper,
  useToolTip
} from './Tooltip.helper';
import { StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipProps, TooltipToggle, TooltipType } from './Tooltip.types';

const Tooltip: TooltipType = ({
  position,
  toggle,
  anchorRef,
  isDark = true,
  dataTestId,
  autoHideDuration = 5000,
  children
}: TooltipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { isOpen, startAutoHideTimer, setTooltipOpen } = useToolTip({
    autoHideDuration,
    toggleType: toggle,
    anchorRef
  });

  if (!isOpen) {
    return null;
  }

  const handleTooltipMouseEnter = () => {
    if (toggle === TooltipToggle.Event) {
      setTooltipOpen(true);
    }
  };

  const handleTooltipMouseOut = () => {
    if (toggle === TooltipToggle.Event) {
      startAutoHideTimer();
    }
  };

  const renderChildren = () => {
    if (typeof children !== 'string') {
      return children;
    }

    const tooltipTextColor = isDark ? TextColor.White : TextColor.DigitalBlack;

    return (
      <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
        {children}
      </Text>
    );
  };

  const StyledTooltipInner = TooltipPositionToInnerMapper[position];

  const box = anchorRef?.current;
  const width = box?.offsetWidth;
  const height = box?.offsetHeight;
  const anchorOffset = { vertical: height || 0, horizontal: width || 0 };

  return (
    <TypographyProvider>
      <StyledTooltipWrapper
        theme={theme}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseOut}
        data-testid={dataTestId}
      >
        <StyledTooltipInner position={position} anchorOffset={anchorOffset} theme={theme} isDark={isDark}>
          {renderChildren()}
        </StyledTooltipInner>
      </StyledTooltipWrapper>
    </TypographyProvider>
  );
};

Tooltip.startTooltipTimer = (anchorRef) => {
  const event = new window.CustomEvent(START_TOOLTIP_TIMER_EVENT, { detail: anchorRef });
  window.dispatchEvent(event);
};

Tooltip.openTooltip = (anchorRef) => {
  const event = new window.CustomEvent(OPEN_TOOLTIP_EVENT, { detail: anchorRef });
  window.dispatchEvent(event);
};

Tooltip.closeTooltip = (anchorRef) => {
  const event = new window.CustomEvent(CLOSE_TOOLTIP_EVENT, { detail: anchorRef });
  window.dispatchEvent(event);
};
export { Tooltip };
