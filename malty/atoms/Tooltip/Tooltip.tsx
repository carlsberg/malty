/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipPosition, TooltipProps, TooltipToggle } from './Tooltip.types';

export const Tooltip = ({ position, toggle, isOpen, anchor, children }: TooltipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [showTooltip, setShowTooltip] = useState(false);
  const [anchorOffset, setAnchorOffset] = useState({ vertical: 0, horizontal: 0 });

  useEffect(() => {
    if (anchor) {
      const box = document.getElementById(anchor);
      const width = box?.offsetWidth;
      const height = box?.offsetHeight;
      switch (position) {
        case TooltipPosition.Top:
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
        case TooltipPosition.Bottom:
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
        <StyledTooltip
          position={position}
          anchorOffset={anchorOffset}
          open={isOpen === true ? isOpen : showTooltip}
          theme={theme}
        >
          <Text textStyle={TextStyle.MediumDefault}>{children}</Text>
        </StyledTooltip>
      </StyledTooltipWrapper>
    </TypographyProvider>
  );
};
