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

export const Tooltip = ({ position, toggle, isOpen, anchor, darkTheme = true, children }: TooltipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [showTooltip, setShowTooltip] = useState(false);
  const [anchorOffset, setAnchorOffset] = useState({ vertical: 0, horizontal: 0 });
  const tooltipTextColor = darkTheme ? TextColor.White : TextColor.DigitalBlack;
  let StyledTooltipInner = StyledTooltip;

  useEffect(() => {
    if (anchor) {
      const box = document.getElementById(anchor);
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

  useEffect(() => {
    let returnFn;

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleMouseOut = () => {
      setShowTooltip(false);
    };

    const handleTooltipToggle = () => {
      setShowTooltip(!showTooltip);
    };

    if (toggle === TooltipToggle.Hover) {
      const hoverEl = anchor ? document.getElementById(anchor) : false;

      if (hoverEl) {
        hoverEl.addEventListener('mouseenter', handleMouseEnter);
        hoverEl.addEventListener('mouseout', handleMouseOut);
      }

      returnFn = () => {
        if (hoverEl) {
          hoverEl.removeEventListener('mouseenter', handleMouseEnter);
          hoverEl.removeEventListener('mouseout', handleMouseOut);
        }
      };
    }

    if (toggle === TooltipToggle.Click) {
      const hoverEl = anchor ? document.getElementById(anchor) : false;

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
      handleMouseEnter();
    }
    return returnFn;
  }, [anchor, toggle, showTooltip]);

  return (
    <TypographyProvider>
      <StyledTooltipWrapper theme={theme}>
        <StyledTooltipInner
          position={position}
          anchorOffset={anchorOffset}
          open={isOpen === true ? isOpen : showTooltip}
          theme={theme}
          darkTheme={darkTheme}
        >
          <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
            {children}
          </Text>
        </StyledTooltipInner>
      </StyledTooltipWrapper>
    </TypographyProvider>
  );
};
