import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  readOnly
}: InputProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(theme.sizes.xl.value.replace('px', ''));

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

  const renderClearable = () =>
    (clearable || type === InputType.Search) &&
    !!value && (
      <Icon
        data-testid={`${dataTestId}-clearable-icon`}
        name={IconName.ItemClose}
        color={IconColor.Primary}
        size={IconSize.Medium}
        className="clear-trigger"
        onClick={() => onValueChange('')}
      />
    );

  const renderIcon = () =>
    icon && <Icon data-testid={`${dataTestId}-icon`} name={icon} color={IconColor.Primary} size={IconSize.Medium} />;

  const renderInput = () => (
    <TypographyProvider>
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
          isIconLeft={iconPosition === InputIconPosition.Left}
          addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Date && type !== InputType.Number}
          onChange={(e) => onValueChange(transform((e.target as HTMLInputElement).value))}
          type={type}
          theme={theme}
        />
        {renderClearable()}
        {renderIcon()}
      </StyledClearableWrapper>
    </TypographyProvider>
  );

  const renderInputNumber = () => (
    <TypographyProvider>
      <StyledButton
        data-testid={`${dataTestId}-quantity-minus`}
        theme={theme}
        size={numSize}
        isError={!!error}
        disabled={disabled}
        readOnly={readOnly}
        onClick={() => onValueChange(value ? (+value - 1).toString() : '-1')}
      >
        <Icon name={IconName.Minus} color={IconColor.Primary} size={IconSize.Medium} className="quantity-control" />
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
        addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Date && type !== InputType.Number}
        onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
        type={type}
        theme={theme}
      />
      <StyledButton
        data-testid={`${dataTestId}-quantity-plus`}
        theme={theme}
        size={numSize}
        isError={!!error}
        disabled={disabled}
        readOnly={readOnly}
        onClick={() => onValueChange(value ? (+value + 1).toString() : '1')}
      >
        <Icon name={IconName.Plus} color={IconColor.Primary} size={IconSize.Medium} className="quantity-control" />
      </StyledButton>
    </TypographyProvider>
  );

  const renderTelNumber = () => {
    const height = `${numSize}px`;
    return (
      // TO FOLLOW: Convert the select to DSM dropdown
      <TypographyProvider>
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
            addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Date && type !== InputType.Number}
            onChange={(e) => onValueChange(transform((e.target as HTMLInputElement).value))}
            type={type}
            theme={theme}
          />
          {renderClearable()}
          {renderIcon()}
        </StyledClearableWrapper>
      </TypographyProvider>
    );
  };

  return (
    <TypographyProvider>
      <StyledInputContainer theme={theme}>
        {label && (
          <StyledLabel data-testid={`${dataTestId}-label`} htmlFor={id} theme={theme}>
            {label}
          </StyledLabel>
        )}
        <StyledInputWrapper
          isIconLeft={iconPosition === InputIconPosition.Left}
          clearable={clearable || type === InputType.Search}
          addLeft={type === InputType.Telephone}
          addRight={type === InputType.Date}
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
    </TypographyProvider>
  );
};
