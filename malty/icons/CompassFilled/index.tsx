import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const CompassFilled = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12.955 1.702l6.001 19.2c.295.943-.808 1.696-1.579 1.08l-5.376-4.301-5.376 4.3c-.77.617-1.874-.136-1.58-1.078l6.002-19.201c.292-.936 1.616-.936 1.908 0z" />
    </g>
  );

export default CompassFilled;
