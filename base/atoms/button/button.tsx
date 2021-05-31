import React, { ReactNode } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { theme as componentTheme } from '../theme';
import { Size, Type } from './button.types';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  url?: string;
  buttonType: Type;
  size?: Size;
  onClick?: () => unknown;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
}

const getTypeStyles = (buttonType: string) => {
  switch (buttonType) {
    case Type.Floater:
      return css`
        border-radius: 50%;
      `;
    case Type.Secondary:
      return css`
        color: #fff;
        background: #f56342;
      `;
    case Type.Primary:
      return css`
        color: #fff;
        background: red;
      `;
    default:
      return css`
        color: dodgerblue;
        background: #eee;
      `;
  }
};

const InputButton = styled.button<{ buttonType: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background-color: #212833;
  font-size: 14px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  border: none;
  cursor: pointer;
  ${({ buttonType }) => getTypeStyles(buttonType)};
  &:hover {
    background-color: green;
  }
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: black;
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;
export const Button = ({ text, buttonType }: ButtonProps) => (
  <ThemeProvider theme={componentTheme}>
    <InputButton buttonType={buttonType}>{text}</InputButton>
  </ThemeProvider>
);
