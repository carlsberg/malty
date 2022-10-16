/* eslint-disable react/jsx-props-no-spreading */
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { emojiFlag } from './emojiFlag';
import {
  StyledButton,
  StyledClearableWrapper,
  StyledError,
  StyledHint,
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
  StyledLabel,
  StyledOption,
  StyledSelect
} from './Input.styled';
import {
  InputCountry,
  InputIconPosition,
  InputMaskTypes,
  InputPrefixes,
  InputProps,
  InputSize,
  InputType
} from './Input.types';

export const Input = ({
  value,
  onValueChange,
  onInputBlur,
  label,
  type,
  placeholder,
  error,
  icon,
  iconPosition = InputIconPosition.Left,
  disabled,
  size = InputSize.Medium,
  clearable,
  mask,
  children,
  hint,
  dataTestId,
  readOnly,
  inputRef,
  isLeftButtonDisabled,
  isRightButtonDisabled,
  onClearButtonClick,
  ...props
}: InputProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(theme.sizes.xl.value.replace('px', ''));
  const [passwordToggleType, setPasswordToggleType] = useState(InputType.Password);

  useEffect(() => {
    switch (size) {
      case InputSize.Large: {
        setNumSize(theme.sizes['2xl'].value.replace('px', ''));
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value.replace('px', ''));
        break;
      }
    }
  }, [size, theme]);

  const transform = (text: string): string => {
    if (mask) {
      if (type === InputType.Telephone && mask === InputMaskTypes.Telephone) {
        const tel = text.match(/(\d{3,})(\d{4,})/);
        if (tel) return `${tel[1]}  ${tel[2]}`;
      } else if (type === InputType.Text && mask === InputMaskTypes.CreditCard) {
        // eslint-disable-next-line no-useless-escape
        const card = text.match(/((\d{4}[-|" "|\.])|(\d{4})){3}\d{4}/g);
        if (card) return `${card[1]}-${card[2]}-${card[3]}-${card[4]}`;
      }
    }
    return text;
  };
  const HandleTogglePassword = () => {
    if (value) {
      if (passwordToggleType === InputType.Password) {
        setPasswordToggleType(InputType.Text);
      } else {
        setPasswordToggleType(InputType.Password);
      }
    }
  };

  const handleClear = () => {
    onValueChange('');
    if (onClearButtonClick) {
      onClearButtonClick();
    }
  };

  const renderClearable = () =>
    (clearable || type === InputType.Search) &&
    !!value && (
      <Icon
        data-testid={`${dataTestId}-clearable-icon`}
        name={IconName.ItemClose}
        color={IconColor.DigitalBlack}
        size={IconSize.Medium}
        className="clear-trigger"
        onClick={handleClear}
      />
    );

  const renderIcon = () => {
    if (type === InputType.Password && value) {
      return (
        <Icon
          className={`${passwordToggleType}` === InputType.Password ? 'password-icon-show' : 'password-icon-hide'}
          onClick={HandleTogglePassword}
          data-testid={`${dataTestId}-icon`}
          name={passwordToggleType === InputType.Password ? IconName.EyeShow : IconName.EyeHide}
          color={IconColor.DigitalBlack}
          size={IconSize.Medium}
        />
      );
    }
    return (
      icon && (
        <Icon data-testid={`${dataTestId}-icon`} name={icon} color={IconColor.DigitalBlack} size={IconSize.Medium} />
      )
    );
  };

  const renderInput = () => (
    <StyledClearableWrapper>
      <StyledInput
        data-testid={dataTestId}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        size={parseInt(numSize, 10)}
        hasIcon={!!icon}
        hasClearable={clearable}
        isError={!!error}
        isIconLeft={iconPosition === InputIconPosition.Left && type !== InputType.Password}
        addRight={(iconPosition !== InputIconPosition.Left && type !== InputType.Number) || type === InputType.Password}
        onChange={(e) => onValueChange(transform((e.target as HTMLInputElement).value))}
          onBlur={(e) => onInputBlur && onInputBlur(transform((e.target as HTMLInputElement).value))}
        type={type === InputType.Password ? passwordToggleType : type}
        theme={theme}
          ref={inputRef}
        {...props}
      />
      {renderClearable()}
      {renderIcon()}
    </StyledClearableWrapper>
  );

  const renderInputNumber = () => (
    <span>
      <StyledButton
        data-testid={`${dataTestId}-quantity-minus`}
        theme={theme}
        size={numSize}
        isError={!!error}
        disabled={disabled || isLeftButtonDisabled}
        readOnly={readOnly}
        onClick={() => onValueChange(value ? (+value - 1).toString() : '-1')}
      >
        <Icon
          name={IconName.Minus}
          color={IconColor.DigitalBlack}
          size={IconSize.Medium}
          className="quantity-control"
        />
      </StyledButton>
      <StyledInput
        data-testid={dataTestId}
        name={id}
        id={id}
        value={value}
        placeholder="0"
        disabled={disabled}
        readOnly={readOnly}
        size={parseInt(numSize, 10)}
        hasIcon={!!icon}
        hasClearable={clearable}
        isError={!!error}
        isIconLeft={iconPosition === InputIconPosition.Left}
        addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Number}
        onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
        onBlur={(e) => onInputBlur && onInputBlur((e.target as HTMLInputElement).value)}
        type={type}
        theme={theme}
        ref={inputRef}
        {...props}
      />
      <StyledButton
        data-testid={`${dataTestId}-quantity-plus`}
        theme={theme}
        size={numSize}
        isError={!!error}
        disabled={disabled || isRightButtonDisabled}
        readOnly={readOnly}
        onClick={() => onValueChange(value ? (+value + 1).toString() : '1')}
      >
        <Icon name={IconName.Plus} color={IconColor.DigitalBlack} size={IconSize.Medium} className="quantity-control" />
      </StyledButton>
    </span>
  );

  const renderTelNumber = () => {
    const height = `${numSize}px`;
    return (
      // TO FOLLOW: Convert the select to DSM dropdown
      <StyledClearableWrapper>
        <StyledSelect
          data-testid={`${dataTestId}-phone-select`}
          theme={theme}
          height={height}
          disabled={disabled}
          readOnly={readOnly}
          isError={!!error}
        >
          {Object.keys(InputCountry)
            .sort((a, b) => {
              const newA = InputPrefixes[InputCountry[a as keyof typeof InputCountry] as keyof typeof InputPrefixes];
              const newB = InputPrefixes[InputCountry[b as keyof typeof InputCountry] as keyof typeof InputPrefixes];
              return newA - newB;
            })
            .map((country) => {
              const code =
                InputPrefixes[InputCountry[country as keyof typeof InputCountry] as keyof typeof InputPrefixes];
              return (
                <StyledOption
                  data-testid={`${dataTestId}-phone-option-${country}`}
                  key={`option-value-${country}`}
                  value={code}
                  height={height}
                >
                  {emojiFlag(country)}
                  &nbsp;&nbsp;&nbsp;+{code}
                </StyledOption>
              );
            })}
        </StyledSelect>
        <StyledInput
          data-testid={dataTestId}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          size={parseInt(numSize, 10)}
          hasIcon={!!icon}
          hasClearable={clearable}
          isError={!!error}
          isIconLeft={iconPosition === InputIconPosition.Left}
          addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Number}
          onChange={(e) => onValueChange(transform((e.target as HTMLInputElement).value))}
            onBlur={(e) => onInputBlur?.(transform((e.target as HTMLInputElement).value))}
          type={type}
          theme={theme}
            ref={inputRef}
          {...props}
        />
        {renderClearable()}
        {renderIcon()}
      </StyledClearableWrapper>
    );
  };

  return (
    <StyledInputContainer theme={theme}>
      {label && (
        <StyledLabel disabled={disabled} data-testid={`${dataTestId}-label`} htmlFor={id} theme={theme}>
          {label}
        </StyledLabel>
      )}
      <StyledInputWrapper
        isIconLeft={iconPosition === InputIconPosition.Left && type !== InputType.Password}
        clearable={clearable || type === InputType.Search}
        addLeft={type === InputType.Telephone}
        theme={theme}
      >
        {type !== InputType.Number && type !== InputType.Telephone && renderInput()}
        {type === InputType.Telephone && renderTelNumber()}
        {type === InputType.Number && renderInputNumber()}
        {children}
      </StyledInputWrapper>
      {error && (
        <StyledError data-testid={`${dataTestId}-error-label`} theme={theme}>
          {error}
        </StyledError>
      )}
      {hint && !error && (
        <StyledHint data-testid={`${dataTestId}-hint`} disabled={disabled} theme={theme}>
          {hint}
        </StyledHint>
      )}
    </StyledInputContainer>
  );
};
