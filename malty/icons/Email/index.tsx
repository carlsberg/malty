import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Email = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M19 4a3 3 0 013 3v9.99a3 3 0 01-3 3H5.02a3 3 0 01-3-3V7a3 3 0 013-3zM4.019 7.566l.001 9.424a1 1 0 001 1H19a1 1 0 001-1l-.001-9.419-7.492 4.297a1 1 0 01-.876.057l-.119-.058zM18.72 5.999H5.307l6.703 3.848z"
      fillRule="evenodd"
    />
  );

export default Email;
