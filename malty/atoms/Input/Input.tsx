import {
  Icon,
  IconColors as Colors,
  IconNamesTypes,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { StyledError, StyledInput, StyledInputContainer, StyledInputWrapper, StyledLabel } from './Input.styled';
import { IconPosition, InputProps, InputType, Sizes, SizeTypes } from './Input.types';

export const Input = ({
  value,
  onValueChange,
  label,
  type,
  placeholder,
  error,
  icon,
  iconPosition = IconPosition.Left,
  disabled,
  size = SizeTypes.Medium,
  clearable
}: InputProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  return (
    <StyledInputContainer theme={theme}>
      <StyledLabel htmlFor={id} theme={theme}>
        {label}
      </StyledLabel>
      <StyledInputWrapper
        isIconLeft={iconPosition === IconPosition.Left}
        clearable={clearable}
        addRight={type === InputType.Number || type === InputType.Date}
        theme={theme}
      >
        <StyledInput
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          size={Sizes[size]}
          hasIcon={!!icon}
          isIconLeft={iconPosition === IconPosition.Left}
          onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
          type={type}
          theme={theme}
        />
        {clearable && !!value && (
          <Icon
            name={IconNamesTypes.Close}
            color={Colors.Primary}
            size={IconSizes.Medium}
            className="clear-trigger"
            onClick={() => onValueChange('')}
          />
        )}
        {icon && <Icon name={icon} color={Colors.Primary} size={IconSizes.Medium} />}
      </StyledInputWrapper>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledInputContainer>
  );
};
