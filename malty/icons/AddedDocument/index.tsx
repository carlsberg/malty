import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const AddedDocument = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M17.06 2a1 1 0 01.117 1.993L17.06 4H5a1 1 0 00-.993.883L4 5v14a1 1 0 00.883.993L5 20h12.06a1 1 0 01.117 1.993L17.06 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2zm3 4a1 1 0 011 1v10a1 1 0 01-1 1h-10a1 1 0 01-1-1V7a1 1 0 011-1zm-1 2h-8v8h8zm-1.4 1.64a1 1 0 01.269 1.295l-.07.105-2.14 2.85a1 1 0 01-1.42.185l-.089-.08-1.42-1.43a1 1 0 011.326-1.493l.094.083.604.609L16.26 9.84a1 1 0 011.4-.2z"
      fillRule="evenodd"
    />
  );

export default AddedDocument;
