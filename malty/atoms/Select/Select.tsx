import { IconColors, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import Check from '@carlsberggroup/malty.icons.check';
import ChevronDown from '@carlsberggroup/malty.icons.chevron-down';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledButton,
  StyledButtonContainer,
  StyledError,
  StyledLabel,
  StyledOption,
  StyledOptionsWrapper
} from './Select.styled';
import { OptionsType, SelectProps, SizeTypes } from './Select.types';

export const Select = ({
  initialValue,
  onChange,
  options,
  placeholder,
  label,
  type,
  error,
  disabled,
  size = SizeTypes.Medium,
  children
}: SelectProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(parseInt(theme.variables.select.size.medium.value));
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState(initialValue);
  const [selectedNameState, setSelectedNameState] = useState(null);

  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionSelected = (option: OptionsType) => {
    setShowOptionList(false);
    setSelectedValueState(option);
    onChange(option);
  };

  useEffect(() => {
    setSelectedValueState(initialValue);
  }, [initialValue]);

  const selectedValue = options?.find(({ value }) => value === selectedValueState?.value)?.value;
  const selectedName = options?.find(({ value }) => value === selectedValueState?.value)?.name;

  useEffect(() => {
    switch (size) {
      case SizeTypes.Large: {
        setNumSize(parseInt(theme.variables.select.size.large.value));
        break;
      }
      default: {
        setNumSize(parseInt(theme.variables.select.size.medium.value));
        break;
      }
    }
  }, [size, theme]);

  return (
    <TypographyProvider>
      {label && (
        <StyledLabel disabled={disabled} htmlFor={id} theme={theme}>
          {label}
        </StyledLabel>
      )}
      <StyledButtonContainer theme={theme}>
        <StyledButton
          isActive={!!selectedName}
          selectStyle={type}
          height={numSize}
          onClick={() => toggleOptionList()}
          disabled={disabled}
          isError={!!error}
        >
          {selectedName || placeholder}
          <ChevronDown color={IconColors.Primary} size={IconSizesTypes.Medium} />
        </StyledButton>
        {showOptionList && (
          <StyledOptionsWrapper height={numSize}>
            {children}
            {options.map((option: OptionsType) => (
              <StyledOption
                key={option.value}
                value={option.value}
                onClick={() => handleOptionSelected(option)}
                height={numSize}
              >
                {option.name}
                {option === selectedValueState && <Check color={IconColors.Primary} size={IconSizesTypes.Medium} />}
              </StyledOption>
            ))}
          </StyledOptionsWrapper>
        )}
      </StyledButtonContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </TypographyProvider>
  );
};
