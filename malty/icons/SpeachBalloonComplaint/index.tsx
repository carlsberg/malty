import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const SpeachBalloonComplaint = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        className="path-speach-ballon"
        d="M15.874 14.52c2.891 0 5.235-2.538 5.235-5.667 0-3.13-2.344-5.667-5.235-5.667H8.236C5.343 3.186 3 5.723 3 8.853c0 3.129 1.94 5.666 4.831 5.666v5.667l5.425-5.667z"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke="red"
      />
      <g>
        <path d="M12.055 9.678a.905.905 0 01-.905-.905V6.099a.904.904 0 111.81 0v2.674c0 .5-.405.905-.905.905M12.96 11.568a.905.905 0 11-1.81 0 .905.905 0 011.81 0" />
      </g>
    </g>
  );

export default SpeachBalloonComplaint;
