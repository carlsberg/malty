import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useState } from 'react';
import { Loading } from './Loading';
import { SizeTypes, LoadingStatus } from './Loading.types';

export const BasicCodeInput = () => {
  const [value, setValue] = useState('');
  return (
    <MaltyThemeProvider theme="global">
      <Loading text={'Loading...'} size={SizeTypes.Medium} status={LoadingStatus.Default} />
    </MaltyThemeProvider>
  );
};
