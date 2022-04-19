import { useEffect, useReducer, useRef, useState } from 'react';
import {
  StyledTooltipPositionBottomCenter,
  StyledTooltipPositionBottomLeft,
  StyledTooltipPositionBottomRight,
  StyledTooltipPositionLeft,
  StyledTooltipPositionRight,
  StyledTooltipPositionTopCenter,
  StyledTooltipPositionTopLeft,
  StyledTooltipPositionTopRight
} from './Tooltip.styled';
import { TooltipPosition, TooltipToggle, UseTooltipProps } from './Tooltip.types';

export const useToolTip = ({ anchorRef, autoHideDuration, toggleType, isOpenProp, onClose }: UseTooltipProps) => {
  const [isOpen, setIsOpen] = useState(!!isOpenProp);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const autoHideTimer = useRef<number | NodeJS.Timeout | null>(null);

  const clearAutoHideTimer = () => {
    if (typeof autoHideTimer?.current === 'number') {
      clearTimeout(autoHideTimer.current);
    }
  };

  const setTooltipOpen = (open: boolean) => {
    if (typeof isOpenProp !== 'boolean') {
      clearAutoHideTimer();
      setIsOpen(open);
      if (!open) {
        onClose?.();
      }
    }
  };

  // TooltipToggle.Events logic
  const startAutoHideTimer = () => {
    if (toggleType === TooltipToggle.Event && typeof isOpenProp !== 'boolean') {
      setTooltipOpen(true);
      autoHideTimer.current = setTimeout(() => {
        setIsOpen(false);
        onClose?.();
      }, autoHideDuration);
    }
  };

  // custom global events handling
  useEffect(() => {
    const validateEventSource = (ev: Event) => (ev as CustomEvent).detail === anchorRef;

    const onStartAutoHideTimerEvent = (ev: Event) => {
      if (validateEventSource(ev)) {
        startAutoHideTimer();
      }
    };

    const onOpenTooltipEvent = (ev: Event) => {
      if (validateEventSource(ev)) {
        setTooltipOpen(true);
      }
    };

    const onCloseTooltipEvent = (ev: Event) => {
      if (validateEventSource(ev)) {
        setTooltipOpen(false);
      }
    };
    window.addEventListener(START_TOOLTIP_TIMER_EVENT, onStartAutoHideTimerEvent);
    window.addEventListener(OPEN_TOOLTIP_EVENT, onOpenTooltipEvent);
    window.addEventListener(CLOSE_TOOLTIP_EVENT, onCloseTooltipEvent);
    return () => {
      clearAutoHideTimer();
      window.removeEventListener(START_TOOLTIP_TIMER_EVENT, onStartAutoHideTimerEvent);
      window.removeEventListener(OPEN_TOOLTIP_EVENT, onOpenTooltipEvent);
      window.removeEventListener(CLOSE_TOOLTIP_EVENT, onCloseTooltipEvent);
    };
  }, []);

  // Tooltip events logic
  useEffect(() => {
    const anchorElement = anchorRef?.current;
    if (toggleType === TooltipToggle.Hover) {
      const handleAnchorMouseEnter = () => {
        setTooltipOpen(true);
      };

      const handleAnchorMouseOut = () => {
        setTooltipOpen(false);
      };

      anchorElement?.addEventListener('mouseenter', handleAnchorMouseEnter);
      anchorElement?.addEventListener('mouseout', handleAnchorMouseOut);

      return () => {
        anchorElement?.removeEventListener('mouseenter', handleAnchorMouseEnter);
        anchorElement?.removeEventListener('mouseout', handleAnchorMouseOut);
      };
    }

    return () => null;
  }, [anchorRef, toggleType]);

  // Tooltip events logic
  useEffect(() => {
    const anchorElement = anchorRef?.current;
    if (toggleType === TooltipToggle.Click) {
      const handleTooltipToggle = () => {
        setTooltipOpen(!isOpen);
      };

      anchorElement?.addEventListener('click', handleTooltipToggle);

      return () => {
        anchorElement?.removeEventListener('click', handleTooltipToggle);
      };
    }

    return () => null;
  }, [anchorRef, toggleType, isOpen]);

  // forceUpdate when ref changes since it is a mutation
  // so we can have updated tooltip position offset
  useEffect(() => {
    if (anchorRef.current) {
      forceUpdate();
    }
  }, [anchorRef.current]);

  useEffect(() => {
    if (typeof isOpenProp === 'boolean' && isOpenProp !== isOpen) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);

  return {
    isOpen,
    startAutoHideTimer,
    setTooltipOpen
  };
};

export const TooltipPositionToInnerMapper = {
  [TooltipPosition.TopCenter]: StyledTooltipPositionTopCenter,
  [TooltipPosition.TopLeft]: StyledTooltipPositionTopLeft,
  [TooltipPosition.TopRight]: StyledTooltipPositionTopRight,
  [TooltipPosition.Right]: StyledTooltipPositionRight,
  [TooltipPosition.BottomCenter]: StyledTooltipPositionBottomCenter,
  [TooltipPosition.BottomLeft]: StyledTooltipPositionBottomLeft,
  [TooltipPosition.BottomRight]: StyledTooltipPositionBottomRight,
  [TooltipPosition.Left]: StyledTooltipPositionLeft
};

export const START_TOOLTIP_TIMER_EVENT = 'START_TOOLTIP_TIMER_EVENT';
export const OPEN_TOOLTIP_EVENT = 'OPEN_TOOLTIP_EVENT';
export const CLOSE_TOOLTIP_EVENT = 'CLOSE_TOOLTIP_EVENT';
