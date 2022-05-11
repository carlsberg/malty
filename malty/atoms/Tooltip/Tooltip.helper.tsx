import { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { TooltipPositionStrategy, TooltipToggle, UseTooltipProps } from './Tooltip.types';

export const useToolTip = ({
  positionStrategy = TooltipPositionStrategy.Absolute,
  placement,
  toggleType,
  isOpenProp,
  onClose,
  autoHideDuration,
  tooltipId
}: UseTooltipProps) => {
  const didMountRef = useRef(false);
  const [isOpen, setIsOpen] = useState(!!isOpenProp);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: positionStrategy,
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 5 } },
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  });

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
    }
  };

  const startAutoHideTimer = () => {
    if (toggleType === TooltipToggle.Event && typeof isOpenProp !== 'boolean') {
      setTooltipOpen(true);
      autoHideTimer.current = setTimeout(() => {
        setIsOpen(false);
      }, autoHideDuration);
    }
  };

  useEffect(() => {
    const validateEventSource = (ev: Event) => (ev as CustomEvent).detail === tooltipId;
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

  useEffect(() => {
    if (toggleType === TooltipToggle.Hover) {
      const handleAnchorMouseEnter = () => {
        setTooltipOpen(true);
      };

      const handleAnchorMouseLeave = () => {
        setTooltipOpen(false);
      };

      referenceElement?.addEventListener('mouseenter', handleAnchorMouseEnter);
      referenceElement?.addEventListener('mouseleave', handleAnchorMouseLeave);

      return () => {
        referenceElement?.removeEventListener('mouseenter', handleAnchorMouseEnter);
        referenceElement?.removeEventListener('mouseleave', handleAnchorMouseLeave);
      };
    }

    return () => null;
  }, [referenceElement, toggleType]);

  useEffect(() => {
    if (toggleType === TooltipToggle.Click) {
      const handleTooltipToggle = () => {
        setTooltipOpen(!isOpen);
      };

      referenceElement?.addEventListener('click', handleTooltipToggle);

      return () => {
        referenceElement?.removeEventListener('click', handleTooltipToggle);
      };
    }

    return () => null;
  }, [referenceElement, toggleType, isOpen]);

  useEffect(() => {
    if (typeof isOpenProp === 'boolean' && isOpenProp !== isOpen) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);

  useEffect(() => {
    if (didMountRef.current && !isOpen) {
      onClose?.();
    }
    didMountRef.current = true;
  }, [isOpen]);

  return {
    styles,
    attributes,
    isOpen,
    setTooltipOpen,
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    startAutoHideTimer
  };
};

export const START_TOOLTIP_TIMER_EVENT = 'START_TOOLTIP_TIMER_EVENT';
export const OPEN_TOOLTIP_EVENT = 'OPEN_TOOLTIP_EVENT';
export const CLOSE_TOOLTIP_EVENT = 'CLOSE_TOOLTIP_EVENT';
