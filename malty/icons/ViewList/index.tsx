import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const ViewList = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M3.037 16.875l18 .15a2 2 0 011.982 2.017l-.016 2a2 2 0 01-2.017 1.983l-18-.15a2 2 0 01-1.982-2.017l.016-2a2 2 0 012.017-1.983zm-.017 2l-.017 2 18 .15.017-2zm.014-9.95l17.999.15a2 2 0 011.983 2.017l-.017 2a2 2 0 01-2.016 1.984l-18-.151A2 2 0 011 12.908l.017-2a2 2 0 012.017-1.983zm-.017 2l-.017 2 18 .15.016-2zM3.04.975l18 .151a2 2 0 011.983 2.017l-.017 2a2 2 0 01-2.017 1.983l-18-.15a2 2 0 01-1.982-2.018l.016-2A2 2 0 013.04.975zm-.017 2l-.016 2 17.999.15.017-1.999z"
      fillRule="evenodd"
    />
  );

export default ViewList;
