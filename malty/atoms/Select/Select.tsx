import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { createRef, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledButton,
  StyledButtonContainer,
  StyledCheck,
  StyledChevronDown,
  StyledError,
  StyledHint,
  StyledLabel,
  StyledOption,
  StyledOptionsWrapper,
  StyledSelectedOptionsWrapper,
  StyledWrapper
} from './Select.styled';
import { SelectOptionsType, SelectProps, SelectSize, SelectType } from './Select.types';

export const Select = ({
  defaultValue,
  onValueChange,
  options,
  placeholder,
  label,
  type,
  error,
  hint,
  disabled = false,
  size = SelectSize.Medium,
  children,
  multiple = false,
  selectionText = 'selected'
}: SelectProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(parseInt(theme.sizes.xl.value.replace('px', ''), 10));
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState(defaultValue || []);
  const ref = createRef<HTMLDivElement>();
  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionSelected = (option: SelectOptionsType) => {
    let auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    if (!multiple) {
      setShowOptionList(false);
    }
    if (checkIfSelected(option)) {
      if (multiple) {
        removeSelectedOption(option);
      } else {
        auxSelected = [];

        auxSelected.push(option);
        update(auxSelected);
      }
    } else {
      if (!multiple) {
        auxSelected = [];
      }
      auxSelected.push(option);
      update(auxSelected);
    }
  };

  const checkIfSelected = (option: SelectOptionsType) =>
    !!selectedValueState.find((el: SelectOptionsType) => el.value === option.value);

  const removeSelectedOption = (option: SelectOptionsType) => {
    const index = selectedValueState?.findIndex((el) => el.value === option.value);
    const auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    auxSelected?.splice(index, 1);
    update(auxSelected);
  };

  const update = (auxSelected: SelectOptionsType[]) => {
    setSelectedValueState(auxSelected);
    onValueChange(auxSelected);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains((event.target as Node) || null)) {
      setShowOptionList(false);
    }
  };

  useEffect(() => {
    switch (size) {
      case SelectSize.Large: {
        setNumSize(parseInt(theme.sizes['2xl'].value.replace('px', ''), 10));
        break;
      }
      default: {
        setNumSize(parseInt(theme.sizes.xl.value.replace('px', ''), 10));
        break;
      }
    }
  }, [size, theme]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const displaySelectedValues = () => {
    if (selectedValueState.length > 0) {
      if (selectedValueState.length > 2) {
        return `${selectedValueState.length} ${selectionText}`;
      }
      return selectedValueState?.map((selectedValue: SelectOptionsType, index: number) =>
        index !== 0 ? `, ${selectedValue.name}` : selectedValue.name
      );
    }
    return type === SelectType.Inline ? label : placeholder;
  };
  const renderDefaultDropdown = () => (
    <TypographyProvider>
      <StyledOptionsWrapper isOpen={showOptionList} selectStyle={type} theme={theme} height={numSize}>
        {children}
        {!children &&
          options?.map((option: SelectOptionsType, index: number) => (
            <StyledOption
              theme={theme}
              key={option.value}
              value={option.value}
              onClick={() => handleOptionSelected(option)}
              height={numSize}
              selected={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
              selectStyle={type}
              disabled={disabled}
              data-testid={`select-option-${index}`}
            >
              {multiple && (
                <Checkbox
                  labelText={option.name as string}
                  value={option.value}
                  onValueChange={() => null}
                  checked={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
                />
              )}
              {!multiple && (
                <>
                  <StyledWrapper theme={theme}>
                    {option.icon}
                    {option.name}
                  </StyledWrapper>
                  {selectedValueState.find((el: SelectOptionsType) => el.value === option.value) && (
                    <StyledCheck selectStyle={type} color={IconColor.Primary} size={IconSize.Small} />
                  )}
                </>
              )}
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </TypographyProvider>
  );
  return (
    <TypographyProvider>
      {label && type !== SelectType.Inline && (
        <StyledLabel disabled={disabled} htmlFor={id} theme={theme}>
          {label}
        </StyledLabel>
      )}
      <StyledButtonContainer ref={ref} selectStyle={type} theme={theme}>
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
          open={showOptionList}
        >
          <StyledSelectedOptionsWrapper theme={theme} data-testid="selected-value">
            {displaySelectedValues()}
          </StyledSelectedOptionsWrapper>
          <StyledChevronDown
            theme={theme}
            selectStyle={type}
            disabled={disabled}
            open={showOptionList}
            color={IconColor.Primary}
            size={IconSize.Medium}
          />
        </StyledButton>

        {renderDefaultDropdown()}
      </StyledButtonContainer>

      {error && type !== SelectType.Inline && <StyledError theme={theme}>{error}</StyledError>}
      {hint && !error && type !== SelectType.Inline && (
        <StyledHint disabled={disabled} theme={theme}>
          {hint}
        </StyledHint>
      )}
    </TypographyProvider>
  );
};
