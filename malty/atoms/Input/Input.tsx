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
import {
  StyledButton,
  StyledError,
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
  StyledLabel,
  StyledOption,
  StyledSelect
} from './Input.styled';
import { Country, IconPosition, InputProps, InputType, MaskTypes, Prefixes, Sizes, SizeTypes } from './Input.types';

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
  clearable,
  mask
}: InputProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);

  const transform = (text: string): string => {
    if (mask) {
      if (type === InputType.Telephone && mask === MaskTypes.Telephone) {
        const tel = text.match(/(\d{3})(\d{3})(\d{4})/);
        if (tel) return `(${tel[1]}) ${tel[2]}  ${tel[3]}`;
      } else if (type === InputType.Text && mask === MaskTypes.CreditCard) {
        const card = text.match(/(\d{4})(\d{4})(\d{4})(\d{4})/);
        if (card) return `${card[1]}-${card[2]}-${card[3]}-${card[4]}`;
      } else if (mask instanceof RegExp) {
        // const exp = text.match(/(\d{4})(\d{4})(\d{4})(\d{4})/);
        // if (exp) {
        //   return exp.map(e);
        // }
        // add for custom regexp
      }
    }
    return text;
  };

  const renderClearable = () =>
    (clearable || type === InputType.Search) &&
    !!value && (
      <Icon
        name={IconNamesTypes.ItemClose}
        color={Colors.Primary}
        size={IconSizes.Medium}
        className="clear-trigger"
        onClick={() => onValueChange('')}
      />
    );

  const renderIcon = () => icon && <Icon name={icon} color={Colors.Primary} size={IconSizes.Medium} />;

  const renderInput = () => (
    <>
      <StyledInput
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        size={Sizes[size]}
        hasIcon={!!icon}
        isIconLeft={iconPosition === IconPosition.Left}
        addRight={iconPosition !== IconPosition.Left && type !== InputType.Date && type !== InputType.Number}
        onChange={(e) => onValueChange(transform((e.target as HTMLInputElement).value))}
        type={type}
        theme={theme}
      />
      {renderClearable()}
      {renderIcon()}
    </>
  );

  const renderInputNumber = () => (
    <>
      <StyledButton
        theme={theme}
        size={Sizes[size]}
        onClick={() => onValueChange(value ? (+value - 1).toString() : '-1')}
      >
        <Icon name={IconNamesTypes.Minus} color={Colors.Primary} size={IconSizes.Medium} className="quantity-control" />
      </StyledButton>
      <StyledInput
        name={id}
        id={id}
        value={value}
        placeholder="0"
        disabled={disabled}
        size={Sizes[size]}
        hasIcon={!!icon}
        isIconLeft={iconPosition === IconPosition.Left}
        addRight={iconPosition !== IconPosition.Left && type !== InputType.Date && type !== InputType.Number}
        onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
        type={type}
        theme={theme}
      />
      <StyledButton
        theme={theme}
        size={Sizes[size]}
        onClick={() => onValueChange(value ? (+value + 1).toString() : '1')}
      >
        <Icon name={IconNamesTypes.Plus} color={Colors.Primary} size={IconSizes.Medium} className="quantity-control" />
      </StyledButton>
    </>
  );

  const renderTelNumber = () => (
    <>
      <StyledSelect theme={theme} size={Sizes[size]}>
        {Object.keys(Country).map((country) => (
          <StyledOption key={`option-value-${country}`} value={country} size={Sizes[size]}>
            {country} {Prefixes[country as keyof typeof Prefixes]}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledInput
        name={id}
        id={id}
        value={value}
        placeholder="0"
        disabled={disabled}
        size={Sizes[size]}
        hasIcon={!!icon}
        isIconLeft={iconPosition === IconPosition.Left}
        addRight={iconPosition !== IconPosition.Left && type !== InputType.Date && type !== InputType.Number}
        onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
        type={type}
        theme={theme}
      />
      {renderClearable()}
      {renderIcon()}
    </>
  );

  return (
    <StyledInputContainer theme={theme}>
      <StyledLabel htmlFor={id} theme={theme}>
        {label}
      </StyledLabel>
      <StyledInputWrapper
        isIconLeft={iconPosition === IconPosition.Left}
        clearable={clearable || type === InputType.Search}
        addLeft={type === InputType.Telephone}
        addRight={type === InputType.Date}
        theme={theme}
      >
        {type !== InputType.Number && type !== InputType.Telephone && renderInput()}
        {type === InputType.Telephone && renderTelNumber()}
        {type === InputType.Number && renderInputNumber()}
      </StyledInputWrapper>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledInputContainer>
  );
};
