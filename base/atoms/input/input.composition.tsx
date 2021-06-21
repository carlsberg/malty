import React, { useState } from 'react';
import { Input } from './input';
import { InputType } from './input.types';

export const BasicInput = () => {
  const [value, setValue] = useState('');
  return <Input type={InputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};
