import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Power = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <path
      d="M18.133 4.507c2.865 1.963 4.612 5.182 4.612 8.69 0 5.843-4.806 10.574-10.724 10.574-5.92 0-10.724-4.73-10.724-10.574 0-3.465 1.703-6.649 4.51-8.62a1 1 0 111.15 1.637c-2.281 1.601-3.66 4.179-3.66 6.983 0 4.732 3.902 8.574 8.724 8.574 4.82 0 8.724-3.842 8.724-8.574 0-2.84-1.414-5.445-3.743-7.04a1 1 0 111.13-1.65zM12.013.118a1 1 0 01.996.88l.007.117.025 7.917a1 1 0 01-1.993.123l-.007-.116-.025-7.917a1 1 0 01.997-1.004z"
      fillRule="evenodd"
    />
  </BaseIcon>
);

export default Power;
