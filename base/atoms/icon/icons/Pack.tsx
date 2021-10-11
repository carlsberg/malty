import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function Pack(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2a1 1 0 01.993.883L11 3v4c0 .462.109.68.581 1.165l.126.128c.1.1.192.195.279.288l.12-.127.17-.17c.548-.534.701-.756.722-1.175L13 7V3a1 1 0 01.883-.993L14 2h3a1 1 0 01.993.883L18 3v4c0 .462.109.68.581 1.165l.126.128c.62.62.99 1.102 1.167 1.707H20a1 1 0 011 1v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-8a1 1 0 011-1h.126c.16-.548.48-.997 1-1.538l.167-.17c.535-.534.685-.757.705-1.181L6 7V3a1 1 0 01.883-.993L7 2zm9 10H5v7a1 1 0 00.883.993L6 20h12a1 1 0 001-1zm-5 2a1 1 0 01.117 1.993L14 16h-4a1 1 0 01-.117-1.993L10 14zM9 4H8v3c0 1.093-.327 1.707-1.127 2.538l-.166.17c-.11.109-.203.206-.283.294h4.152a6.499 6.499 0 00-.157-.167l-.126-.128c-.863-.863-1.244-1.462-1.289-2.495L9 7zm7 0h-1v3c0 1.1-.336 1.714-1.156 2.546l-.17.17c-.11.106-.203.2-.283.285h4.185a6.498 6.498 0 00-.157-.166l-.126-.128c-.863-.863-1.244-1.462-1.289-2.495L16 7z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Pack;
