import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const SurveyCheck = ({ dataTestId = 'icon-SurveyCheck', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0489 1C20.6787 1 22 2.32092 22 3.95019V20.0628C22 21.6928 20.6789 23.014 19.0489 23.014H4.95113C3.32113 23.014 2 21.6928 2 20.0628V3.95019C2 2.32092 3.32135 1 4.95113 1H19.0489ZM19.0489 2.87433H4.95113C4.35637 2.87433 3.87433 3.35622 3.87433 3.95019V20.0628C3.87433 20.6577 4.3563 21.1396 4.95113 21.1396H19.0489C19.6437 21.1396 20.1257 20.6577 20.1257 20.0628V3.95019C20.1257 3.35622 19.6436 2.87433 19.0489 2.87433Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2536 6.90141C15.7658 6.508 15.0515 6.58449 14.6581 7.07226L11.3681 11.1507L9.55228 9.45037L9.45944 9.37368L9.4506 9.36725C8.99406 9.03576 8.35198 9.08808 7.95643 9.51051C7.52812 9.96793 7.55172 10.686 8.00915 11.1143L10.7168 13.6496L10.8073 13.7247L10.8159 13.7309C11.2978 14.0832 11.9831 14.0035 12.3678 13.5265L16.4312 8.48846L16.5009 8.39023L16.5066 8.38094C16.8036 7.9012 16.704 7.26472 16.2536 6.90141ZM15.5325 15.0806H8.77765L8.66593 15.0871L8.65585 15.0882C8.09118 15.1538 7.65309 15.6331 7.65309 16.2153C7.65309 16.8419 8.16109 17.3499 8.78773 17.3499H15.5426L15.6543 17.3435L15.6644 17.3423C16.2291 17.2767 16.6672 16.7974 16.6672 16.2153C16.6672 15.5886 16.1592 15.0806 15.5325 15.0806Z"
      />
    </g>
  </BaseIcon>
);
