import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledCheckboxContainer,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledText
} from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({
  id,
  value = '',
  checked = false,
  labelText,
  error,
  required = false,
  dataTestId,
  isIndeterminate,
  readOnly,
  disabled,
  fullWidth,
  onValueChange,
  ...props
}: CheckboxProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  const getIconName = () => {
    if (checked) {
      return IconName.CheckboxCheck;
    }

    if (isIndeterminate) {
      return IconName.CheckboxCheckAlternate;
    }

    return IconName.CheckboxEmpty;
  };

  const getTextColor = () => {
    if (disabled) {
      return TextColor.DisableLightTheme;
    }

    if (readOnly) {
      return TextColor.Support80;
    }

    return TextColor.DigitalBlack;
  };

  const getIconColor = () => {
    if (disabled) {
      return IconColor.DisableLight;
    }

    if (readOnly) {
      return IconColor.Support80;
    }

    return IconColor.DigitalBlack;
  };

  return (
    <StyledCheckboxContainer fullWidth={fullWidth}>
      <StyledLabel htmlFor={id} disabled={readOnly || disabled} required={required} theme={theme}>
        <StyledSpan theme={theme}>
          <StyledInput
            type="checkbox"
            id={id}
            data-testid={dataTestId}
            value={value}
            checked={checked}
            disabled={readOnly || disabled}
            onChange={onValueChange}
            {...props}
          />
          <Icon name={getIconName()} color={getIconColor()} size={IconSize.Medium} />
        </StyledSpan>
        {labelText ? (
          <StyledText
            textStyle={TextStyle.MediumSmallDefault}
            color={getTextColor()}
            data-testid={`${dataTestId}-label`}
            theme={theme}
          >
            {labelText}
          </StyledText>
        ) : null}
      </StyledLabel>
      {error && (
        <StyledError textStyle={TextStyle.SmallBold} color={TextColor.Fail} theme={theme}>
          {error}
        </StyledError>
      )}
    </StyledCheckboxContainer>
  );
}
