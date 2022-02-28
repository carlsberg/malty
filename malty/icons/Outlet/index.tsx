import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Outlet = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <path
      d="M2 23.497a.993.993 0 01-.993-.865L1 22.518v-6.847a.99.99 0 011-.978c.513 0 .935.377.993.864L3 15.67l-.001 5.868h10v-3.912c0-1.562 1.25-2.84 2.825-2.93l.176-.004c1.656 0 3 1.314 3 2.934v3.912h1.999v-8.8l-7 .001a.993.993 0 01-.992-.864L13 11.762c0-.502.386-.915.883-.972l.117-.006 7.611-.001-2.332-6.848-5.311.001a.993.993 0 01-.994-.864l-.006-.114c0-.502.386-.915.883-.972l.117-.006H20c.391 0 .742.222.905.563l.043.105 3 8.804a.974.974 0 01-.632 1.238 1.02 1.02 0 01-.316.05v9.778a.986.986 0 01-.883.972l-.117.007zm14-6.848a.99.99 0 00-1 .978l-.001 3.912h2v-3.912a.987.987 0 00-.883-.971zM6.6 1c3.644 0 6.6 2.891 6.6 6.457l-.007.274c-.096 2.005-1.232 4.028-3.046 6.025a22.504 22.504 0 01-2.165 2.076l-.275.228-.236.189-.272.207c-.356.26-.844.26-1.2 0l-.271-.207-.37-.299-.292-.247a22.5 22.5 0 01-2.014-1.948C1.156 11.667.002 9.551 0 7.46l.004-.227C.126 3.769 3.032.999 6.6.999zm0 1.956C4.06 2.955 2 4.971 2 7.456l.007.227c.09 1.45 1.019 3.098 2.54 4.772.583.64 1.21 1.239 1.836 1.775l.216.182.217-.182a20.548 20.548 0 001.836-1.775C10.254 10.692 11.2 8.96 11.2 7.459l-.005-.207C11.085 4.86 9.07 2.955 6.6 2.955zm0 1.94c1.445 0 2.618 1.147 2.618 2.561s-1.173 2.56-2.618 2.56c-1.445 0-2.618-1.146-2.618-2.56s1.173-2.56 2.618-2.56zm0 1.653c-.513 0-.93.407-.93.908s.417.908.93.908c.513 0 .929-.406.929-.908s-.416-.908-.929-.908z"
      fillRule="evenodd"
    />
  );

export default Outlet;
