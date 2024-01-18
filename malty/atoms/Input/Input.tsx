import { IconColor } from '@carlsberggroup/malty.atoms.base-icon';
import { Label } from '@carlsberggroup/malty.atoms.label';
import { EyeHide } from '@carlsberggroup/malty.icons.eye-hide';
import { EyeShow } from '@carlsberggroup/malty.icons.eye-show';
import { ItemClose } from '@carlsberggroup/malty.icons.item-close';
import { Minus } from '@carlsberggroup/malty.icons.minus';
import { Plus } from '@carlsberggroup/malty.icons.plus';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { isolateSpaceProps } from '@carlsberggroup/malty.utils.space';
import React, { ChangeEvent, forwardRef, useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { emojiFlag } from './emojiFlag';
import { ensureQuantityRange, useInputSize } from './Input.helper';
import {
  StyledButton,
  StyledCharacterCounter,
  StyledClearableWrapper,
  StyledError,
  StyledHint,
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
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

export const Input = forwardRef(
  (
    {
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
      disableQuantityInput = false,
      size = InputSize.Medium,
      clearable,
      mask,
      children,
      hint,
      dataTestId,
      readOnly,
      disableLeftButton,
      disableRightButton,
      onClearButtonClick,
      required = false,
      onClickLeftInputButton,
      onClickRightInputButton,
      min,
      max,
      maxLength,
      showCharacterCounter = false,
      name: nameProp,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const theme = useContext(ThemeContext) || defaultTheme;
    const id = useMemo(() => uuid(), []);
    const name = nameProp || id;
    const inputSize = useInputSize({ size });
    const [passwordToggleType, setPasswordToggleType] = useState(InputType.Password);
    const valueCounter = value?.length ?? 0;
    const textCounter = maxLength ? maxLength - valueCounter : valueCounter;
    const { spaceProps, restProps } = isolateSpaceProps(props);

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

    const handleTogglePassword = () => {
      if (value) {
        if (passwordToggleType === InputType.Password) {
          setPasswordToggleType(InputType.Text);
        } else {
          setPasswordToggleType(InputType.Password);
        }
      }
    };

    const handleClear = () => {
      onValueChange?.('');
      onClearButtonClick?.();
    };

    const handleLeftButtonClick = () => {
      onValueChange?.(value ? (+value - 1).toString() : '-1');
      onClickLeftInputButton?.();
    };

    const handleRightButtonClick = () => {
      onValueChange?.(value ? (+value + 1).toString() : '1');
      onClickRightInputButton?.();
    };

    const handleOnQuantityChange = ({ currentTarget: { value: currentValue } }: ChangeEvent<HTMLInputElement>) => {
      if (currentValue === '') {
        onValueChange?.(currentValue);
      } else {
        const newValue = parseInt(currentValue, 10);
        onValueChange?.(ensureQuantityRange(newValue, min, max).toString());
      }
    };

    const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const currentValue = transform((event.target as HTMLInputElement).value);
      onValueChange?.(currentValue);
    };

    const renderClearable = () =>
      (clearable || type === InputType.Search) &&
      !!value && (
        <ItemClose className="clear-trigger" dataTestId={`${dataTestId}-clearable-icon`} onClick={handleClear} />
      );

    const renderIcon = () => {
      if (type === InputType.Password) {
        const iconProps = {
          dataTestId: `${dataTestId}-icon`,
          color: disabled ? IconColor.DisableLight : IconColor.DigitalBlack,
          onClick: handleTogglePassword,
          className: 'password-icon'
        };

        if (!value) return null;

        return passwordToggleType === InputType.Password ? <EyeShow {...iconProps} /> : <EyeHide {...iconProps} />;
      }

      const clonedIcon =
        icon &&
        React.cloneElement(icon, {
          dataTestId: `${dataTestId}-icon`,
          color: disabled ? IconColor.DisableLight : IconColor.DigitalBlack
        });

      return clonedIcon;
    };

    const renderCounter = () => {
      return (
        <StyledCharacterCounter $disabled={disabled} $isError={!!error} data-testid={`${dataTestId}-character-counter`}>
          {textCounter}
        </StyledCharacterCounter>
      );
    };

    const renderInput = () => (
      <StyledClearableWrapper>
        <StyledInput
          data-testid={dataTestId}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          size={parseInt(inputSize, 10)}
          hasIcon={!!icon}
          hasClearable={clearable}
          isError={!!error}
          isIconLeft={iconPosition === InputIconPosition.Left && type !== InputType.Password}
          addRight={
            (iconPosition !== InputIconPosition.Left && type !== InputType.Quantity) || type === InputType.Password
          }
          onChange={handleOnInputChange}
          onBlur={(e) => onInputBlur?.(transform((e.target as HTMLInputElement).value))}
          type={type === InputType.Password ? passwordToggleType : type}
          theme={theme}
          ref={ref}
          required={required}
          max={max}
          min={min}
          maxLength={maxLength}
          $showCharacterCounter={showCharacterCounter}
          {...restProps}
        />
        {renderClearable()}
        {renderIcon()}
        {showCharacterCounter && type === InputType.Text && renderCounter()}
      </StyledClearableWrapper>
    );

    const renderQuantityInput = () => (
      <>
        <StyledButton
          data-testid={`${dataTestId}-quantity-minus`}
          theme={theme}
          size={inputSize}
          isError={!!error}
          disabled={disabled || disableLeftButton || (min !== undefined && Number(value) <= min)}
          readOnly={readOnly}
          onClick={handleLeftButtonClick}
          aria-label="Quantity Minus"
          className="quantity-control"
        >
          <Minus />
        </StyledButton>
        <StyledInput
          max={max}
          min={min}
          disableQuantityInput={disableQuantityInput}
          className="quanity-input"
          data-testid={dataTestId}
          name={name}
          id={id}
          value={value}
          placeholder="0"
          disabled={disabled}
          readOnly={readOnly}
          size={parseInt(inputSize, 10)}
          hasIcon={!!icon}
          hasClearable={clearable}
          isError={!!error}
          isIconLeft={iconPosition === InputIconPosition.Left}
          addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Quantity}
          onChange={handleOnQuantityChange}
          onBlur={(e) => onInputBlur?.((e.target as HTMLInputElement).value)}
          type="number"
          theme={theme}
          ref={ref}
          required={required}
          {...restProps}
        />
        <StyledButton
          data-testid={`${dataTestId}-quantity-plus`}
          theme={theme}
          size={inputSize}
          isError={!!error}
          disabled={disabled || disableRightButton || (max !== undefined && Number(value) >= max)}
          readOnly={readOnly}
          onClick={handleRightButtonClick}
          aria-label="Quantity Plus"
          className="quantity-control"
        >
          <Plus />
        </StyledButton>
      </>
    );

    const renderTelNumber = () => {
      const height = `${inputSize}px`;
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
                    &nbsp;&nbsp;+{code}
                  </StyledOption>
                );
              })}
          </StyledSelect>
          <StyledInput
            data-testid={dataTestId}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            size={parseInt(inputSize, 10)}
            hasIcon={!!icon}
            hasClearable={clearable}
            isError={!!error}
            isIconLeft={iconPosition === InputIconPosition.Left}
            addRight={iconPosition !== InputIconPosition.Left && type !== InputType.Quantity}
            onChange={handleOnInputChange}
            onBlur={(e) => onInputBlur?.(transform((e.target as HTMLInputElement).value))}
            type={type}
            theme={theme}
            ref={ref}
            required={required}
            {...restProps}
          />
          {renderClearable()}
          {renderIcon()}
        </StyledClearableWrapper>
      );
    };

    return (
      <StyledInputContainer theme={theme} {...spaceProps}>
        <Label label={label} required={required} disabled={disabled} data-testid={`${dataTestId}-label`} htmlFor={id} />
        <StyledInputWrapper
          isIconLeft={iconPosition === InputIconPosition.Left && type !== InputType.Password}
          $isIconRight={!!icon && iconPosition === InputIconPosition.Right}
          addLeft={type === InputType.Telephone}
          $showCharacterCounter={showCharacterCounter}
          theme={theme}
        >
          {type !== InputType.Quantity && type !== InputType.Telephone && renderInput()}
          {type === InputType.Telephone && renderTelNumber()}
          {type === InputType.Quantity && renderQuantityInput()}
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
  }
);

Input.displayName = 'Input';
