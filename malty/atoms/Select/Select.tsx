import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { IconColors, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import Check from '@carlsberggroup/malty.icons.check';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { emojiFlag } from './emojiFlag';
import {
  StyledButton,
  StyledButtonContainer,
  StyledCheck,
  StyledChevronDown,
  StyledError,
  StyledLabel,
  StyledOption,
  StyledOptionsWrapper,
  StyledSuccess
} from './Select.styled';
import { Country, OptionsType, Prefixes, SelectProps, SelectType, SizeTypes } from './Select.types';

export const Select = ({
  initialValue,
  onChange,
  options,
  placeholder,
  label,
  type,
  error,
  success,
  disabled,
  size = SizeTypes.Medium,
  children,
  multiple = false
}: SelectProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  // eslint-disable-next-line radix
  const [numSize, setNumSize] = useState(parseInt(theme.variables.select.size.medium.value));
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState<any[]>(initialValue || []);
  console.log(selectedValueState);

  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionSelected = (option: any) => {
    // eslint-disable-next-line no-restricted-globals
    onChange(option);
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

  const checkIfSelected = (option) => selectedValueState?.indexOf(option) > -1;

  const removeSelectedOption = (option) => {
    const index = selectedValueState?.indexOf(option);
    const auxSelected = selectedValueState;
    auxSelected?.splice(index, 1);
    update(auxSelected);
  };

  const update = (auxSelected) => {
    setSelectedValueState((prev) => auxSelected);
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

  const renderDropdowncountry = () => (
    <TypographyProvider>
      {showOptionList && (
        <StyledOptionsWrapper theme={theme} height={numSize}>
          {Object.keys(Country)
            .sort((a, b) => {
              const newA = Prefixes[Country[a as keyof typeof Country] as keyof typeof Prefixes];
              const newB = Prefixes[Country[b as keyof typeof Country] as keyof typeof Prefixes];
              return newA - newB;
            })
            .map((country) => (
              <StyledOption
                theme={theme}
                key={`option-value-${country}`}
                value={country}
                height={numSize}
                selected={selectedValueState?.indexOf(country) > -1}
                onClick={() => handleOptionSelected(country)}
                selectStyle={type}
                disabled={disabled}
              >
                {!multiple && (
                  <>
                    {`${emojiFlag(country)} ${Country[country as keyof typeof Country]}`}
                    {selectedValueState?.indexOf(country) > -1 && (
                      <Check
                        color={IconColors.Primary}
                        size={size === SizeTypes.Large ? IconSizesTypes.Medium : IconSizesTypes.Small}
                      />
                    )}
                  </>
                )}

                {multiple && (
                  <Checkbox
                    labelText={`${emojiFlag(country)} ${Country[country as keyof typeof Country]}` as string}
                    value={country}
                    onValueChange={() => handleOptionSelected(country)}
                    checked={selectedValueState?.indexOf(country) > -1}
                  />
                )}
              </StyledOption>
            ))}

          <></>
        </StyledOptionsWrapper>
      )}
    </TypographyProvider>
  );

  const renderDefaultDropdown = () => (
    <TypographyProvider>
      {showOptionList && (
        <StyledOptionsWrapper selectStyle={type} theme={theme} height={numSize}>
          {children}
          {options?.map((option: OptionsType) => (
            <StyledOption
              theme={theme}
              key={option.value}
              value={option.value}
              onClick={() => handleOptionSelected(option)}
              height={numSize}
              selected={selectedValueState?.indexOf(option) > -1}
              selectStyle={type}
              disabled={disabled}
            >
              {multiple && (
                <Checkbox
                  labelText={option.name as string}
                  value={option.value}
                  onValueChange={() => null}
                  checked={selectedValueState?.indexOf(option) > -1}
                />
              )}
              {!multiple && (
                <>
                  {option.name}
                  {selectedValueState?.indexOf(option) > -1 && (
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
          {type === SelectType.Country &&
            (selectedValueState?.length > 0
              ? selectedValueState?.map(
                  (selectedValue: string) =>
                    `${emojiFlag(selectedValue)} ${Country[selectedValue as keyof typeof Country]}`
                )
              : placeholder)}

          {type !== SelectType.Country && selectedValueState.length > 0
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

        {type === SelectType.Country && renderDropdowncountry()}
        {type !== SelectType.Country && renderDefaultDropdown()}
      </StyledButtonContainer>

      {error && type !== SelectType.Inline && <StyledError theme={theme}>{error}</StyledError>}
      {success && !error && type !== SelectType.Inline && <StyledSuccess theme={theme}>{success}</StyledSuccess>}
    </TypographyProvider>
  );
};
