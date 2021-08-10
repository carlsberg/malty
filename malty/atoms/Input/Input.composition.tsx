import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React, { useState } from 'react';
import { Input } from './Input';
import { IconPosition, InputType } from './Input.types';

export const InputText = () => {
  const [value, setValue] = useState('');
  return <Input type={InputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputNumber = () => {
  const [value, setValue] = useState('0');
  return <Input type={InputType.Number} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputEmail = () => {
  const [value, setValue] = useState('test@carlsberg.com');
  return <Input type={InputType.Email} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputPassword = () => {
  const [value, setValue] = useState('123456');
  return <Input type={InputType.Password} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputDate = () => {
  const [value, setValue] = useState('01/01/1970');
  return <Input type={InputType.Date} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputSearch = () => {
  const [value, setValue] = useState('Test query');
  return (
    <Input
      type={InputType.Search}
      value={value}
      icon={IconNamesTypes.Search}
      iconPosition={IconPosition.Left}
      onValueChange={(newValue: string) => setValue(newValue)}
    />
  );
};

export const InputTel = () => {
  const [value, setValue] = useState('999-9999');
  return <Input type={InputType.Telephone} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};

export const InputURL = () => {
  const [value, setValue] = useState('https://www.domain.com');
  return <Input type={InputType.URL} value={value} onValueChange={(newValue: string) => setValue(newValue)} />;
};
