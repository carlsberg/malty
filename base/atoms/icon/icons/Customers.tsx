import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Customers(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.002 3.937a4.344 4.344 0 012.382 7.977 6.841 6.841 0 012.761 2.02 6.942 6.942 0 011.316-1.14 6.65 6.65 0 011.397-.71 4.344 4.344 0 114.41-.02c2.657.94 4.578 3.566 4.675 6.667l.003.245v1.6a1 1 0 01-1.993.116l-.007-.116v-1.6c0-2.937-2.189-5.29-4.853-5.29-.903 0-1.768.269-2.523.772-.446.297-.845.67-1.183 1.104-.046.059-.097.112-.152.157.368.854.585 1.796.615 2.786l.004.245v1.6a1 1 0 01-1.993.118l-.007-.117V18.75c0-2.936-2.189-5.29-4.85-5.29-2.596 0-4.741 2.234-4.85 5.065l-.004.225v1.6a1 1 0 01-1.993.118L.15 20.35V18.75c0-3.125 1.854-5.807 4.471-6.838a4.344 4.344 0 012.381-7.976zm10.041 2.05a2.344 2.344 0 100 4.687 2.344 2.344 0 000-4.688zm-10.04-.05a2.344 2.344 0 10-.001 4.687 2.344 2.344 0 000-4.687z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Customers;
