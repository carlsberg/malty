import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputType } from './Input.types';

export const InputText = () => {
  const [value, setValue] = useState('');
  return (
    <MaltyThemeProvider theme="global">
      <Input type={InputType.Text} value={value} onValueChange={(newValue: string) => setValue(newValue)} />
    </MaltyThemeProvider>
  );
};


export const InputNumber = () => {
    const [value, setValue] = useState('0');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Number} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputEmail = () => {
    const [value, setValue] = useState('test@carlsberg.com');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Email} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputPassword = () => {
    const [value, setValue] = useState('123456');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Password} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputDate = () => {
    const [value, setValue] = useState('01/01/1970');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Date} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputSearch = () => {
    const [value, setValue] = useState('Test query');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Search} value={value}
                   icon={IconNamesTypes.Search} isIconLeft={true}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputTel = () => {
    const [value, setValue] = useState('999-9999');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.Telephone} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}

export const InputURL = () => {
    const [value, setValue] = useState('https://www.domain.com');
    return (
        <MaltyThemeProvider theme="global">
            <Input type={InputType.URL} value={value}
                   onValueChange={(newValue: string) => setValue(newValue)} />
        </MaltyThemeProvider>
    );
}
