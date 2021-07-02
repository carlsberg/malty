import React, { useState } from 'react';
import { Input } from './Input';
import { InputType } from './Input.types';

export const BasicInput = () => {
  const [value, setValue] = useState('');
  return <Input type={InputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};
