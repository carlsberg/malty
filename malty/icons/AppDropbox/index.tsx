import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const AppDropbox = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12.273 14.348a.437.437 0 01.502 0l3.596 2.905a.383.383 0 00.461 0l.841-.538a.396.396 0 01.409-.015.39.39 0 01.202.352v.269a.39.39 0 01-.19.336l-5.428 3.282a.37.37 0 01-.407 0l-5.428-3.282a.39.39 0 01-.19-.336v-.31a.39.39 0 01.203-.352.396.396 0 01.408.016l.896.578a.383.383 0 00.46 0zM6.45 10.084a.437.437 0 01.516 0l4.871 3.107a.43.43 0 01-.013.7l-3.27 2.61a.41.41 0 01-.502 0L3.18 13.392a.43.43 0 010-.7zm11.575.014a.437.437 0 01.516 0l3.27 2.609a.43.43 0 010 .7L16.941 16.5a.41.41 0 01-.503 0l-3.27-2.61a.429.429 0 01.027-.699zM8.093 3.103a.451.451 0 01.502 0l3.27 2.61a.443.443 0 01.014.713L7.008 9.533a.451.451 0 01-.516 0l-3.27-2.61a.43.43 0 010-.7zm8.345-.027a.451.451 0 01.503 0l4.871 3.12a.43.43 0 01.014.7l-3.27 2.61a.451.451 0 01-.516 0l-4.872-3.107a.443.443 0 010-.713z" />
    </g>
  );

export default AppDropbox;
