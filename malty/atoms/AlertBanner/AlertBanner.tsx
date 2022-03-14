import React, { FC, useEffect, useState } from 'react';
import { AlertBannerProps } from './AlertBanner.types';
import { AlertBannerDesktop } from './AlertBannerDesktop';
import { AlertBannerMobile } from './AlertBannerMobile';

export const AlertBanner: FC<AlertBannerProps> = ({ alerts, breakpoint = 768 }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= breakpoint;

  if (!alerts?.length) {
    return null;
  }

  if (isMobile) {
    return <AlertBannerMobile alerts={alerts} />;
  }

  return <AlertBannerDesktop alerts={alerts} />;
};
