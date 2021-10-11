import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const AppLinkedin = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 13.423V20h-3.896v-6.132c0-1.536-.559-2.54-1.974-2.54-.9.009-1.7.567-2 1.397a2.486 2.486 0 00-.13.927V20H9.104V8.574H13v1.625a3.917 3.917 0 013.506-1.892C19.078 8.269 21 9.907 21 13.423zM5.026 3.013C3.907 3.013 3 3.899 3 4.993c0 1.094.907 1.98 2.026 1.98.779.087 1.539-.27 1.956-.919s.417-1.473 0-2.122-1.177-1.006-1.956-.92zM3.052 20h3.896V8.574H3.052z" />
    </g>
  );

export default AppLinkedin;
