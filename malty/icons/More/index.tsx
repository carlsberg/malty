import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const More = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 110 4 2 2 0 010-4z" />
    </g>
  );

export default More;
