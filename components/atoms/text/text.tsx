import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLButtonElement> {

};

export const Text = ( {children}: TextProps ) => {
  return <p>{children}</p>
};