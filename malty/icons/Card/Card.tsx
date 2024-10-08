import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const Card = ({ dataTestId = 'icon-Card', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <path
      d="M9.003 5.542a1 1 0 01.12 1.993l-.116.007-6.923.011v13.822h1.172l.002-.095c.071-2.178 1.14-4.072 2.698-5.007a3.87 3.87 0 114.417 0c1.581.95 2.657 2.885 2.7 5.102h8.765l.001-13.818h-6.933a1 1 0 01-.08-1.994l.193-.004 7.82-.003a1 1 0 01.994.883l.007.117-.001 15.82a1 1 0 01-.884.992l-.116.007H1.085a1 1 0 01-.993-.883l-.007-.117V6.556a1 1 0 01.882-.993l.116-.007zm-.84 11.611c-1.81 0-3.35 1.85-3.407 4.222h6.816l-.002-.088c-.093-2.33-1.618-4.133-3.406-4.133zm6.815-2.437l4.948.01a.75.75 0 01.099 1.494l-.102.006-4.948-.01a.75.75 0 01-.099-1.493zm-6.814-3.991a2.37 2.37 0 10.001 4.74 2.37 2.37 0 000-4.74zm6.8 1.048l4.948.01a.75.75 0 01.1 1.494l-.103.006-4.948-.01a.75.75 0 01-.098-1.493zM12.01.551a1 1 0 01.994.882l.007.117.005 5.482a1 1 0 01-1.993.118l-.007-.116-.005-5.482A1 1 0 0112.009.55z"
      fillRule="evenodd"
    />
  </BaseIcon>
);
