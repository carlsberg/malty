import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useState } from 'react';
import { CodeInput } from './CodeInput';
import { CodeInputType } from './CodeInput.types';

export const BasicCodeInput = () => {
  const [value, setValue] = useState('');
  return (
    <MaltyThemeProvider theme="global">
      <CodeInput type={CodeInputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />
    </MaltyThemeProvider>
  );
};
