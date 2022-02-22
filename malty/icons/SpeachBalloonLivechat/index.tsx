import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const SpeachBalloonLivechat = (props: IconWrapperProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M15.874 14.52c2.891 0 5.235-2.538 5.235-5.667 0-3.13-2.344-5.667-5.235-5.667H8.236C5.343 3.186 3 5.723 3 8.853c0 3.129 1.94 5.666 4.831 5.666v5.667l5.425-5.667z"
        fill="none"
        fillRule="evenodd"
        stroke={theme.colors.colours.default[props.color].value}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <g fill={theme.colors.colours.default[props.color].value}>
        <path d="M9.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0M12.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0M15.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0" />
      </g>
    </g>
  );
};

export default SpeachBalloonLivechat;
