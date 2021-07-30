import { Icon, IconColors as Colors, IconSizesTypes as IconSizes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledCodeInput,
  StyledCodeInputContainer,
  StyledCodeInputWrapper,
  StyledError,
  StyledLabel
} from './CodeInput.styled';
import { CodeInputProps, Sizes, SizeTypes } from './CodeInput.types';

export const CodeInput = ({
  value,
  onValueChange,
  label,
  type,
  placeholder,
  error,
  icon,
  isIconLeft,
  isDisabled,
  size = SizeTypes.Medium
}: CodeInputProps) => {
  const id = useMemo(() => uuid(), []);
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCodeInputContainer theme={theme}>
      <StyledLabel htmlFor={id} theme={theme}>
        {label}
      </StyledLabel>
      <StyledCodeInputWrapper isIconLeft={isIconLeft} theme={theme}>
        <StyledCodeInput
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          size={Sizes[size]}
          hasIcon={!!icon}
          isIconLeft={isIconLeft}
          onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
          type={type}
          theme={theme}
        />
        {icon && <Icon name={icon} color={Colors.Primary} size={IconSizes.Medium} />}
      </StyledCodeInputWrapper>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledCodeInputContainer>
  );
};
