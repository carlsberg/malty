import React, { useState } from 'react';
import { Select } from './Select';
import { SelectType } from './Select.types';

export const SelectText = () => {
  const [value, setValue] = useState('');
  return (
    <Select
      options={}
      type={SelectType.Dropdown}
      value={value}
      onValueChange={(newValue: string) => setValue(newValue)}
    />
  );
};
