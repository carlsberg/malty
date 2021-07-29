import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Loading } from './Loading';
import { LoadingStatus, SizeTypes } from './Loading.types';

export const BasicCodeInput = () => (
  <MaltyThemeProvider theme="global">
    <Loading text="Loading..." size={SizeTypes.Medium} status={LoadingStatus.Pending} />
  </MaltyThemeProvider>
);
