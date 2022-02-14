import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { IconColors, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledButton,
  StyledButtonContainer,
  StyledCheck,
  StyledChevronDown,
  StyledError,
  StyledLabel,
  StyledOption,
  StyledOptionsWrapper,
  StyledSuccess,
  StyledWrapper
} from './Select.styled';
import { OptionsType, SelectProps, SelectType, SizeTypes } from './Select.types';

export const Select = ({
  defaultValue,
  onValueChange,
  options,
  placeholder,
  label,
  type,
  error,
  success,
  disabled = false,
  size = SizeTypes.Medium,
  children,
  multiple = false,
  className
}: SelectProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  // eslint-disable-next-line radix
  const [numSize, setNumSize] = useState(parseInt(theme.variables.select.size.medium.value));
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState(defaultValue || []);

  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionSelected = (option: OptionsType) => {
    // eslint-disable-next-line no-restricted-globals
    onValueChange(option);
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    if (!multiple) {
      setShowOptionList(false);
    }
    if (checkIfSelected(option)) {
      if (multiple) {
        removeSelectedOption(option);
      }
    } else {
      if (!multiple) {
        selectedValueState.pop();
      }
      // setSelectedValueState([...selectedValueState, option]);
      setSelectedValueState((prev) => [...prev, option]);
    }
  };

  const checkIfSelected = (option: OptionsType) =>
    !!selectedValueState.find((el: OptionsType) => el.value === option.value);

  const removeSelectedOption = (option: OptionsType) => {
    const index = selectedValueState?.indexOf(option);
    const auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    auxSelected?.splice(index, 1);
    update(auxSelected);
  };

  const update = (auxSelected: OptionsType[]) => {
    setSelectedValueState(auxSelected);
    // setSelectedValueState(option);
  };

  useEffect(() => {
    switch (size) {
      case SizeTypes.Large: {
        // eslint-disable-next-line radix
        setNumSize(parseInt(theme.variables.select.size.large.value));
        break;
      }
      default: {
        // eslint-disable-next-line radix
        setNumSize(parseInt(theme.variables.select.size.medium.value));
        break;
      }
    }
  }, [size, theme]);

  const renderDefaultDropdown = () => (
    <TypographyProvider>
      {showOptionList && (
        <StyledOptionsWrapper selectStyle={type} theme={theme} height={numSize}>
          {children}
          {!children &&
            options?.map((option: OptionsType, index: number) => (
              <StyledOption
                theme={theme}
                key={option.value}
                value={option.value}
                onClick={() => handleOptionSelected(option)}
                height={numSize}
                selected={!!selectedValueState.find((el: OptionsType) => el.value === option.value)}
                selectStyle={type}
                disabled={disabled}
                data-testid={`select-option-${index}`}
                className={className}
              >
                {multiple && (
                  <Checkbox
                    labelText={option.name as string}
                    value={option.value}
                    onValueChange={() => null}
                    checked={!!selectedValueState.find((el: OptionsType) => el.value === option.value)}
                  />
                )}
                {!multiple && (
                  <>
                    <StyledWrapper>
                      {option.icon}
                      {option.name}
                    </StyledWrapper>
                    {selectedValueState.find((el: OptionsType) => el.value === option.value) && (
                      <StyledCheck
                        selectStyle={type}
                        color={IconColors.Primary}
                        size={size === SizeTypes.Large ? IconSizesTypes.Medium : IconSizesTypes.Small}
                      />
                    )}
                  </>
                )}
              </StyledOption>
            ))}
        </StyledOptionsWrapper>
      )}
    </TypographyProvider>
  );
  return (
    <TypographyProvider>
      {label && type !== SelectType.Inline && (
        <StyledLabel disabled={disabled} htmlFor={id} theme={theme}>
          {label}
        </StyledLabel>
      )}
      <StyledButtonContainer selectStyle={type} theme={theme}>
        <StyledButton
          name={id}
          id={id}
          theme={theme}
          isActive={selectedValueState?.length > 0 || type === SelectType.Inline}
          selectStyle={type}
          height={numSize}
          onClick={() => toggleOptionList()}
          disabled={disabled}
          isError={!!error && type !== SelectType.Inline}
          isSuccess={!!success && type !== SelectType.Inline}
          open={showOptionList}
        >
          {selectedValueState.length > 0
            ? selectedValueState?.map((selectedValue: OptionsType, index: number) =>
                index !== 0 ? `, ${selectedValue.name}` : selectedValue.name
              )
            : (type === SelectType.Inline && label) || (type === SelectType.Default && placeholder)}

          <StyledChevronDown
            selectStyle={type}
            disabled={disabled}
            open={showOptionList}
            color={IconColors.Primary}
            size={IconSizesTypes.Medium}
          />
        </StyledButton>

        {renderDefaultDropdown()}
      </StyledButtonContainer>

      {error && type !== SelectType.Inline && <StyledError theme={theme}>{error}</StyledError>}
      {success && !error && type !== SelectType.Inline && <StyledSuccess theme={theme}>{success}</StyledSuccess>}
    </TypographyProvider>
  );
};
