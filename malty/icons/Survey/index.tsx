import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Survey = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M19.485.29c1.739 0 3.149 1.41 3.149 3.149v17.193c0 1.739-1.41 3.149-3.15 3.149H4.443a3.149 3.149 0 01-3.15-3.15V3.44A3.149 3.149 0 014.443.29zm0 2H4.442c-.635 0-1.15.515-1.15 1.149v17.193c0 .634.515 1.149 1.15 1.149h15.043c.634 0 1.149-.515 1.149-1.15V3.44c0-.634-.515-1.148-1.15-1.148zm-3.226 13.046a1 1 0 01.117 1.994l-.117.006H7.663a1 1 0 01-.116-1.993l.116-.007zm.64-10.523a1 1 0 01.223 1.304l-.073.103-5.17 6.41a1 1 0 01-1.367.18l-.095-.078L6.976 9.51a1 1 0 011.27-1.54l.097.08 2.655 2.486 4.494-5.572a1 1 0 011.406-.15z"
      fillRule="evenodd"
    />
  );

export default Survey;
