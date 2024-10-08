import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const File = ({ dataTestId = 'icon-File', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M6.313 1.94l7.57.1a1.02 1.02 0 01.511.148 1.082 1.082 0 01.08.056l.016.011.05.043.03.028 6.04 5.92c.204.2.304.466.3.731v.034l-.11 9.708A3.38 3.38 0 0117.392 22l-11.25-.09A3.37 3.37 0 012.8 18.512l.11-13.22A3.382 3.382 0 016.313 1.94zm-.02 1.999l-.13.007A1.38 1.38 0 004.91 5.308l-.11 13.22a1.37 1.37 0 001.358 1.382l11.25.09A1.377 1.377 0 0018.8 18.68L18.9 10H15.87a3 3 0 01-2.995-2.824L12.87 7l-.001-2.974zM15.87 15.96a1 1 0 01.117 1.993l-.117.007h-8a1 1 0 01-.117-1.993l.117-.007zm0-4a1 1 0 01.117 1.993l-.117.007h-8a1 1 0 01-.117-1.993l.117-.007zm1.63-3.961L14.87 5.42V7a1 1 0 00.883.993L15.87 8z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
