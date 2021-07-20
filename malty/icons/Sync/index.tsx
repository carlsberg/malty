import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Sync = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19.303 9.493a1 1 0 011.414 0l2.8 2.8a1 1 0 01-1.414 1.414L21 12.603V13a9 9 0 01-5.285 8.205l-.27.117a9 9 0 01-9.813-1.954 1 1 0 111.416-1.414A7 7 0 0019 13v-.377l-1.083 1.084a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414zM8.555 2.679a9 9 0 019.813 1.954 1 1 0 11-1.416 1.414A7 7 0 005 11l-.001.375 1.084-1.082a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-2.8 2.8a1 1 0 01-1.414 0l-2.8-2.8a1 1 0 011.414-1.414L3 11.395 3 11.001a9 9 0 015.285-8.205z" />
    </g>
  );

export default Sync;
