import layoutProps from '@carlsberggbs/malty.theme.malty-theme-provider/layout.json';
import { getBreakpointNumber } from '@carlsberggbs/malty.utils.helpers';
import { useEffect, useState } from 'react';

export enum Device {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop'
}
const minWidthTablet = `${getBreakpointNumber(layoutProps.xsmall['device-max-width'].value) + 1}px`;
const minWidthDesktop = `${getBreakpointNumber(layoutProps.small['device-max-width'].value) + 1}px`;
const mobileBreakpoint = `(max-width: ${layoutProps.xsmall['device-max-width'].value})`;
const tabletBreakpoint = `(min-width: ${minWidthTablet}) and (max-width: ${layoutProps.small['device-max-width'].value})`;
const desktopBreakpoint = `(min-width: ${minWidthDesktop})`;

const getBreakpoint = (device: Device) => {
  if (device === Device.Tablet) {
    return tabletBreakpoint;
  }

  if (device === Device.Desktop) {
    return desktopBreakpoint;
  }

  return mobileBreakpoint;
};

const getMatches = (device: Device) => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(getBreakpoint(device)).matches;
  }

  return false;
};

export const useMatchMedia = (device: Device) => {
  const [matches, setMatches] = useState<boolean>(getMatches(device));

  useEffect(() => {
    const matchMedia = window.matchMedia(getBreakpoint(device));

    const handleChange = () => {
      setMatches(getMatches(device));
    };

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [device]);

  return matches;
};
