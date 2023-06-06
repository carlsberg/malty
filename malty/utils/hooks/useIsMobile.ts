import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import { useEffect, useState } from 'react';

const mobileBreakpoint = `(max-width: ${layoutProps.xsmall['device-max-width'].value})`;

const getMatches = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(mobileBreakpoint).matches;
  }

  return false;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getMatches());

  function handleChange() {
    setIsMobile(getMatches());
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(mobileBreakpoint);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobile;
};
