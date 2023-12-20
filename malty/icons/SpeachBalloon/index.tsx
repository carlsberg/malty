import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const SpeachBalloon = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2a5 5 0 015 5v-.001l.658.001a5.33 5.33 0 013.58 1.37l.192.182a5.33 5.33 0 01-3.769 9.108l-1.765.008-4.202 4.052C11.06 22.332 10 21.882 10 21v-3.452a5.07 5.07 0 01-2.667-1.522C6.39 15.004 5.91 13.64 6 12.318c0-.107.004-.213.01-.318H6A5 5 0 116 2zm5.66 7h-6.33c-1.836 0-3.326 1.486-3.332 3.386a3.07 3.07 0 003.017 3.274 1 1 0 01.985 1v1.986l2.796-2.696a1 1 0 01.69-.28l2.17-.01A3.334 3.334 0 0021 12.322 3.33 3.33 0 0017.66 9zm-5.484-4.995L12 4H6a3 3 0 100 6h.535a5.33 5.33 0 014.795-3L15 6.999A3 3 0 0012 4z" />
    </g>
  </BaseIcon>
);

export default SpeachBalloon;
