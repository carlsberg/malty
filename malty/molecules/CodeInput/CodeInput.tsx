import { Icon, IconColors as Colors, IconSizesTypes as IconSizes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledCodeInput,
  StyledCodeInputContainer,
  StyledCodeInputWrapper,
  StyledError,
  StyledLabel
} from './CodeInput.styled';
import { CodeInputProps, SizeTypes } from './CodeInput.types';

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
  size
}: CodeInputProps) => {
  const id = useMemo(() => uuid(), []);
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.variables.codeInput.size.medium.value);

  useEffect(() => {
    switch (size) {
      case SizeTypes.Large: {
        setNumSize(theme.variables.codeInput.size.large.value);
        break;
      }
      default: {
        setNumSize(theme.variables.codeInput.size.medium.value);
        break;
      }
    }
  }, [size, theme]);

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
          sizing={numSize}
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
