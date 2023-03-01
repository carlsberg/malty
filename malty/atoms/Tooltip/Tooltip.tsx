import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useLayoutEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { CLOSE_TOOLTIP_EVENT, OPEN_TOOLTIP_EVENT, START_TOOLTIP_TIMER_EVENT, useToolTip } from './Tooltip.helper';
import { StyledArrow, StyledTooltip, StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipPositionStrategy, TooltipToggle, TooltipType } from './Tooltip.types';

const Tooltip: TooltipType = function Tooltip({
  placement,
  toggle = TooltipToggle.Hover,
  isDark = true,
  dataTestId,
  autoHideDuration = 5000,
  onClose,
  isOpen: isOpenProp,
  triggerComponent,
  tooltipId,
  positionStrategy = TooltipPositionStrategy.Absolute,
  children
}) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const {
    isOpen,
    startAutoHideTimer,
    setTooltipOpen,
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    updateTooltipPosition,
    styles,
    attributes
  } = useToolTip({
    placement,
    isOpenProp,
    autoHideDuration,
    toggleType: toggle,
    onClose,
    tooltipId,
    positionStrategy
  });

  useLayoutEffect(() => {
    if (isOpen) {
      updateTooltipPosition?.();
    }
  }, [isOpen, updateTooltipPosition]);

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

  return (
    <>
      {triggerComponent(setReferenceElement)}

      <StyledTooltipWrapper
        {...attributes.popper}
        ref={setPopperElement}
        style={styles.popper}
        data-testid={dataTestId}
        theme={theme}
        isDark={isDark}
        isOpen={isOpen}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseOut={handleTooltipMouseOut}
      >
        <StyledTooltip theme={theme}>{renderChildren()}</StyledTooltip>
        <StyledArrow data-popper-arrow theme={theme} isDark={isDark} ref={setArrowElement} style={styles.arrow} />
      </StyledTooltipWrapper>
    </>
  );
};

Tooltip.startTooltipTimer = (triggerElement) => {
  const event = new window.CustomEvent(START_TOOLTIP_TIMER_EVENT, { detail: triggerElement });
  window.dispatchEvent(event);
};

Tooltip.openTooltip = (triggerElement) => {
  const event = new window.CustomEvent(OPEN_TOOLTIP_EVENT, { detail: triggerElement });
  window.dispatchEvent(event);
};

Tooltip.closeTooltip = (triggerElement) => {
  const event = new window.CustomEvent(CLOSE_TOOLTIP_EVENT, { detail: triggerElement });
  window.dispatchEvent(event);
};
export { Tooltip };
