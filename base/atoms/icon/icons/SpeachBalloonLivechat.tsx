import * as React from 'react';
import { IconInterface, Sizes, SizesTypes } from '../icon.types';

function SpeachBalloonLivechat(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M15.874 14.52c2.891 0 5.235-2.538 5.235-5.667 0-3.13-2.344-5.667-5.235-5.667H8.236C5.343 3.186 3 5.723 3 8.853c0 3.129 1.94 5.666 4.831 5.666v5.667l5.425-5.667z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <g fill="#000">
          <path d="M9.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0M12.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0M15.81 8.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0" />
        </g>
      </g>
    </svg>
  );
}

export default SpeachBalloonLivechat;
