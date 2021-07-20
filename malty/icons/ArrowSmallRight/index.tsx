import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const ArrowSmallRight = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M13.293 5.293a1 1 0 011.414 0l6 6A1.006 1.006 0 0121 12l-.004-.086.003.054L21 12a1.018 1.018 0 01-.146.52 1.035 1.035 0 01-.147.187l.08-.09a1.003 1.003 0 01-.007.008l-.073.082-6 6a1 1 0 01-1.414-1.414L17.585 13H4a1 1 0 01-.993-.883L3 12a1 1 0 011-1h13.585l-4.292-4.293a1 1 0 01-.083-1.32z" />
    </g>
  );

export default ArrowSmallRight;
