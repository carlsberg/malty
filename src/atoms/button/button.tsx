import React from 'react';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => <button {...rest}>{children}</button>;
