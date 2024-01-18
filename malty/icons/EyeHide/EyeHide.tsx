import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const EyeHide = ({ dataTestId = 'icon-EyeHide', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.34804 13.5379C2.49086 12.6578 1.99999 12 1.99999 12H4.64348C5.0628 12.4395 5.59116 12.9512 6.20525 13.4602C7.88611 14.8535 9.93483 16 12 16C14.0651 16 16.1139 14.8535 17.7947 13.4602C18.4088 12.9512 18.9372 12.4395 19.3565 12H22C22 12 21.5093 12.6575 20.6525 13.5373L21.8904 15.0125C22.2454 15.4356 22.1902 16.0663 21.7671 16.4213C21.3441 16.7763 20.7133 16.7211 20.3583 16.2981L19.1875 14.9027C18.6592 15.3478 18.0693 15.7957 17.429 16.2072L18.232 17.5981C18.5082 18.0764 18.3443 18.688 17.866 18.9641C17.3877 19.2402 16.7761 19.0764 16.5 18.5981L15.6717 17.1635C14.8304 17.538 13.9331 17.8164 12.998 17.9358C12.9993 17.957 13 17.9784 13 18V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18C11 17.9784 11.0007 17.957 11.002 17.9358C10.0669 17.8164 9.16962 17.538 8.32824 17.1635L7.49998 18.5981C7.22384 19.0764 6.61225 19.2402 6.13396 18.9641C5.65567 18.688 5.49179 18.0764 5.76793 17.5981L6.57096 16.2072C5.9309 15.7958 5.34123 15.3481 4.81316 14.9033L3.64278 16.2981C3.28777 16.7211 2.65702 16.7763 2.23394 16.4213C1.81087 16.0663 1.75569 15.4356 2.11069 15.0125L3.34804 13.5379Z"
    />
  </BaseIcon>
);
