import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const PackageKeg = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M19 1a1 1 0 011 1v7a1 1 0 01.117 1.993L20 11v6a1 1 0 01.117 1.993L20 19v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1a1 1 0 01-.117-1.993L4 17v-6a1 1 0 01-.117-1.993L4 9V2a1 1 0 011-1zm-1 18H6v1a1 1 0 00.77.974l.113.02L7 21h10a1 1 0 001-1zm0-4H6v2h12zm0-4H6v2h12zm0-8H6v6h12zm-4 2a1 1 0 01.117 1.993L14 7h-4a1 1 0 01-.117-1.993L10 5z"
      fillRule="evenodd"
    />
  );

export default PackageKeg;
