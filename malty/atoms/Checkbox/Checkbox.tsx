import { IconColor } from '@carlsberggroup/malty.atoms.base-icon';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { CheckboxCheck } from '@carlsberggroup/malty.icons.checkbox-check';
import { CheckboxCheckAlternate } from '@carlsberggroup/malty.icons.checkbox-check-alternate';
import { CheckboxEmpty } from '@carlsberggroup/malty.icons.checkbox-empty';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { isolateSpaceProps } from '@carlsberggroup/malty.utils.space';
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

export const Checkbox = ({
  id,
  value = '',
  checked = false,
  labelText,
  error,
  required = false,
  dataTestId = 'checkbox',
  isIndeterminate,
  readOnly,
  disabled,
  fullWidth,
  onValueChange,
  ...props
}: CheckboxProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { spaceProps, restProps } = isolateSpaceProps(props);

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

  const renderIcon = () => {
    const iconColor = getIconColor();

    if (checked) {
      return <CheckboxCheck dataTestId="checkbox-check-icon" color={iconColor} />;
    }

    if (isIndeterminate) {
      return <CheckboxCheckAlternate dataTestId="checkbox-check-alternate-icon" color={iconColor} />;
    }

    return <CheckboxEmpty dataTestId="checkbox-empty-icon" color={iconColor} />;
  };

  return (
    <StyledCheckboxContainer fullWidth={fullWidth} data-testid={`${dataTestId}-wrapper`} {...spaceProps}>
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
            {...restProps}
          />
          {renderIcon()}
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
};
