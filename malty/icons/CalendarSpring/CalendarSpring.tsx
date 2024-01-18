import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const CalendarSpring = ({ dataTestId = 'icon-CalendarSpring', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M12.155 4.503c2.228-1.053 4.356-.152 5.099 2.142l.031.105.106.033c2.294.742 3.195 2.87 2.142 5.098l-.078.156.078.155c1.053 2.227.152 4.355-2.141 5.099l-.107.031-.031.107c-.743 2.294-2.87 3.195-5.099 2.142L12 19.493l-.156.077c-2.227 1.054-4.355.153-5.098-2.141l-.032-.107-.106-.031c-2.294-.743-3.195-2.871-2.142-5.099l.078-.156-.078-.155C3.413 9.653 4.314 7.525 6.61 6.783l.105-.033.032-.105c.743-2.294 2.871-3.195 5.098-2.141L12 4.58zM15.47 7.75c-.286-1.69-1.413-2.169-2.92-1.177a1 1 0 01-1.1 0C9.945 5.58 8.818 6.058 8.533 7.75a1 1 0 01-.82.819c-1.691.286-2.17 1.412-1.177 2.92a1 1 0 010 1.099c-.992 1.506-.514 2.632 1.178 2.92a1 1 0 01.819.818c.285 1.69 1.412 2.169 2.918 1.177a1 1 0 011.1 0c1.506.992 2.633.514 2.919-1.177a1 1 0 01.818-.819c1.691-.287 2.17-1.413 1.177-2.919a1 1 0 010-1.1c.992-1.507.514-2.633-1.176-2.919a1 1 0 01-.82-.82zm-3.47 1.297a3 3 0 110 6.001 3 3 0 010-6.001zm0 2a1 1 0 10.002 2.001A1 1 0 0012 11.046z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
