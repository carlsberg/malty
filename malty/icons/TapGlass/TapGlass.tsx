import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const TapGlass = ({ dataTestId = 'icon-TapGlass', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M18 12a1 1 0 01.992 1.127l-.908 7.093A1.999 1.999 0 0116.09 22h-2.184a1.995 1.995 0 01-1.978-1.762l-.92-7.11A1 1 0 0112 12zM3.02 22a1 1 0 01-.117-1.993L3 20 3 13.93C3 7.712 6.315 3.157 11.253 3.004L11.51 3h4c1.306 0 2.418.835 2.83 2h.592c.028 0 .052-.016.062-.012L19 5V3a1 1 0 011.993-.117L21 3l-.002 2.065a2.07 2.07 0 01-1.914 1.93L18.93 7h-.601a3.004 3.004 0 01-2.309 1.955v1.595a1 1 0 01-1.993.117l-.007-.117V9H13c-3.016 0-4.21 1.393-4.286 4.603l-.004.257L8.709 20h.021a1 1 0 01.117 1.993L8.73 22zm13.844-8h-3.727l.777 6h2.182zM15.51 5h-4C7.684 5 5 8.603 5 13.93V20h1.71v-6.146c.024-4.317 1.9-6.75 6.018-6.85L13 7h2.5a1 1 0 001-1l.005-.09-.002-.027a1 1 0 00-.876-.876z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
