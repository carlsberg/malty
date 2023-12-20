import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Plus = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3.91c.527 0 .953.427.953.953v6.184h6.184c.486 0 .887.363.946.833l.007.12a.953.953 0 01-.953.953h-6.184v6.184a.954.954 0 01-.833.946l-.12.007a.953.953 0 01-.953-.953v-6.184H4.863a.954.954 0 01-.946-.833L3.91 12c0-.527.427-.953.953-.953h6.184V4.863c0-.486.363-.887.833-.946z" />
    </g>
  </BaseIcon>
);

export default Plus;
