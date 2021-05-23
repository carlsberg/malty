import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

};

export const Button = ( {children, ...rest}: ButtonProps ) => {
  return <button {...rest}>{children}</button>
};