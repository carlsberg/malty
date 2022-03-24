import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledTooltip,
  StyledTooltipPositionBottomCenter,
  StyledTooltipPositionBottomLeft,
  StyledTooltipPositionBottomRight,
  StyledTooltipPositionLeft,
  StyledTooltipPositionRight,
  StyledTooltipPositionTopCenter,
  StyledTooltipPositionTopLeft,
  StyledTooltipPositionTopRight,
  StyledTooltipWrapper
} from './Tooltip.styled';
import { TooltipPosition, TooltipProps, TooltipToggle } from './Tooltip.types';

export const Tooltip = ({
  position,
  isOpen,
  toggle,
  anchor,
  isDark = true,
  dataQaId,
  autoHideDuration = 5000,
  onHideTooltip,
  children
}: TooltipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const tooltipTextColor = isDark ? TextColor.White : TextColor.DigitalBlack;

  const [showTooltip, setShowTooltip] = useState(true);
  const [anchorOffset, setAnchorOffset] = useState({ vertical: 0, horizontal: 0 });
  // Tooltip auto hide setup
  let autoHideTimer: ReturnType<typeof setTimeout> | null = null;

  const tooltipHoverRef = React.useRef<null | HTMLDivElement>(null);

  // Width size anchor logic
  useEffect(() => {
    if (anchor) {
      const box = anchor.current;
      const width = box?.offsetWidth;
      const height = box?.offsetHeight;

      switch (position) {
        case TooltipPosition.TopCenter:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.TopLeft:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.TopRight:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.Right:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.BottomCenter:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.BottomLeft:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.BottomRight:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;
        case TooltipPosition.Left:
          setAnchorOffset({
            vertical: height || 0,
            horizontal: width || 0
          });
          break;

        default:
          setAnchorOffset({ vertical: 0, horizontal: 0 });
          break;
      }
    }
  }, [anchor]);

  // Positioning logic
  let StyledTooltipInner = StyledTooltip;

  switch (position) {
    case TooltipPosition.TopCenter:
      StyledTooltipInner = StyledTooltipPositionTopCenter;
      break;
    case TooltipPosition.TopLeft:
      StyledTooltipInner = StyledTooltipPositionTopLeft;
      break;
    case TooltipPosition.TopRight:
      StyledTooltipInner = StyledTooltipPositionTopRight;
      break;
    case TooltipPosition.Right:
      StyledTooltipInner = StyledTooltipPositionRight;
      break;
    case TooltipPosition.BottomCenter:
      StyledTooltipInner = StyledTooltipPositionBottomCenter;
      break;
    case TooltipPosition.BottomLeft:
      StyledTooltipInner = StyledTooltipPositionBottomLeft;
      break;
    case TooltipPosition.BottomRight:
      StyledTooltipInner = StyledTooltipPositionBottomRight;
      break;
    case TooltipPosition.Left:
      StyledTooltipInner = StyledTooltipPositionLeft;
      break;
    default:
      StyledTooltipInner = StyledTooltip;
      break;
  }

  // TooltipToggle.Events logic
  const setAutoHideTimer = () => {
    if (autoHideTimer != null) {
      clearTimeout(autoHideTimer);
    }
    autoHideTimer = setTimeout(() => {
      hideTooltip();
    }, autoHideDuration) as unknown as ReturnType<typeof setTimeout>;
  };

  // set timeout on component mount
  useEffect(() => {
    setAutoHideTimer();
    return () => {
      if (autoHideTimer) {
        hideTooltip();
        clearTimeout(autoHideTimer);
      }
    };
  }, []);

  const hideTooltip = () => {
    if (toggle === TooltipToggle.Event) {
      setShowTooltip(false);
      if (onHideTooltip) {
        onHideTooltip();
      }

      if (autoHideTimer) {
        clearTimeout(autoHideTimer);
      }
    }
  };

  // Tooltip events logic
  useEffect(() => {
    let returnFn;

    const handleAnchorMouseEnter = () => {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer);
      }
      setShowTooltip(true);
    };

    const handleAnchorMouseOut = () => {
      setShowTooltip(false);
    };

    const handleTooltipMouseEnter = () => {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer);
      }
      setShowTooltip(true);
    };

    const handleTooltipMouseOut = () => {
      setAutoHideTimer();
    };

    const handleTooltipToggle = () => {
      setShowTooltip(!showTooltip);
    };

    if (toggle === TooltipToggle.Hover) {
      const hoverEl = anchor ? anchor.current : false;

      if (hoverEl) {
        hoverEl.addEventListener('mouseenter', handleAnchorMouseEnter);
        hoverEl.addEventListener('mouseout', handleAnchorMouseOut);
      }

      returnFn = () => {
        if (hoverEl) {
          hoverEl.removeEventListener('mouseenter', handleAnchorMouseEnter);
          hoverEl.removeEventListener('mouseout', handleAnchorMouseOut);
        }
      };
    }

    if (toggle === TooltipToggle.Click) {
      const hoverEl = anchor ? anchor.current : false;

      if (hoverEl) {
        hoverEl.addEventListener('click', handleTooltipToggle);
      }

      returnFn = () => {
        if (hoverEl) {
          hoverEl.removeEventListener('click', handleTooltipToggle);
        }
      };
    }

    if (toggle === TooltipToggle.Persist) {
      setShowTooltip(true);
    }

    // Handle mouse events on tooltip
    if (toggle === TooltipToggle.Event) {
      const hoverTooltip = tooltipHoverRef ? tooltipHoverRef.current : false;

      if (hoverTooltip) {
        hoverTooltip.addEventListener('mouseenter', handleTooltipMouseEnter);
        hoverTooltip.addEventListener('mouseleave', handleTooltipMouseOut);
      }

      returnFn = () => {
        if (hoverTooltip) {
          hoverTooltip.removeEventListener('mouseenter', handleTooltipMouseEnter);
          hoverTooltip.removeEventListener('mouseleave', handleTooltipMouseOut);
        }
      };
    }

    return returnFn;
  }, [anchor, toggle, showTooltip]);

  const renderChildren = () => {
    if (toggle === TooltipToggle.Event) {
      return children;
    }

    return (
      <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
        {children}
      </Text>
    );
  };

  if (!showTooltip) {
    return null;
  }

  return (
    <TypographyProvider>
      <StyledTooltipWrapper theme={theme} ref={tooltipHoverRef} data-testid={`${dataQaId}`}>
        <StyledTooltipInner
          position={position}
          anchorOffset={anchorOffset}
          open={isOpen === true ? isOpen : showTooltip}
          theme={theme}
          isDark={isDark}
        >
          {renderChildren()}
        </StyledTooltipInner>
      </StyledTooltipWrapper>
    </TypographyProvider>
  );
};
