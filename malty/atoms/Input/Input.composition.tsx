import { MaltyThemeProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputType } from './Input.types';

export const BasicInput = () => {
  const [value, setValue] = useState('');
  return (
    <MaltyThemeProvider theme="global">
      <Input type={InputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />
    </MaltyThemeProvider>
  );
};
