import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Input, InputIconPosition, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Label } from '@carlsberggroup/malty.atoms.label';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { createRef, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  StyledActionButton,
  StyledActionButtonWrapper,
  StyledActionsWrapper,
  StyledButtonContainer,
  StyledCheck,
  StyledError,
  StyledHint,
  StyledMainWrapper,
  StyledOption,
  StyledOptionsWrapper,
  StyledSearchWrapper,
  StyledWrapper
} from './Select.styled';
import { SelectOptionsType, SelectPosition, SelectProps, SelectSize, SelectType } from './Select.types';

export const Select = ({
  defaultValue = [],
  onValueChange,
  options,
  placeholder,
  label,
  type,
  error,
  hint,
  disabled = false,
  size = SelectSize.Medium,
  multiple = false,
  selectionText = 'selected',
  value,
  search = false,
  dataTestId,
  readOnly,
  selectAllLabel = 'Select all',
  clearAllLabel = 'Clear all',
  clearAllOption = true,
  alignPosition = SelectPosition.Left,
  onBlur
}: SelectProps) => {
  const theme = defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState(value || defaultValue);
  const [queryText, setQueryText] = useState('');
  const [selectOptions, setSelectOptions] = useState(options);

  const ref = createRef<HTMLDivElement>();
  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  // eslint-disable-next-line consistent-return
  const handleOptionSelected = (option: SelectOptionsType) => {
    const auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    if (!multiple) {
      setShowOptionList(false);
    }
    if (checkIfSelected(option)) {
      if (multiple) {
        removeSelectedOption(option);
      } else {
        update([option]);
      }
    } else {
      if (!multiple) {
        return update([option]);
      }
      auxSelected.push(option);
      update(auxSelected);
      // setSelectedValueState((prev) => [...prev, option]);
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
        setNumSize(theme.sizes['2xl'].value);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
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
  useEffect(() => {
    if (defaultValue.length > 0 && (value === undefined || value?.length === 0)) setSelectedValueState(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    if (value) setSelectedValueState(value);
  }, [value]);

  useEffect(() => {
    setSelectOptions(options);
  }, [options]);

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

  const handleSearch = (query: string) => {
    setQueryText(query);
    if (query.length >= 3) {
      const filterOptions = options?.filter((el) => el.name.includes(query));

      setSelectOptions(filterOptions);
    } else {
      setSelectOptions(options);
    }
  };

  const handleSelectAll = () => {
    if (selectOptions && selectOptions.length > 0) update(selectOptions);
  };

  const handleClearAll = () => {
    update([]);
    if (!multiple) setShowOptionList(false);
  };
  const renderDefaultDropdown = () => (
    <StyledMainWrapper>
      <StyledOptionsWrapper
        data-testid={`${dataTestId}-options`}
        isOpen={showOptionList}
        selectStyle={type}
        theme={theme}
        height={numSize}
        position={type === SelectType.Inline ? alignPosition : undefined}
      >
        <StyledActionsWrapper theme={theme}>
          {search && (
            <StyledSearchWrapper theme={theme}>
              <Input
                data-testid={`${dataTestId}-search-input`}
                size={size === SelectSize.Medium ? InputSize.Medium : InputSize.Large}
                onValueChange={handleSearch}
                type={InputType.Search}
                value={queryText}
                icon={IconName.Search}
              />
            </StyledSearchWrapper>
          )}
          {((selectedValueState.length > 0 && clearAllOption) || multiple) && (
            <StyledActionButtonWrapper height={numSize} theme={theme}>
              {multiple && (
                <StyledActionButton data-testid={`${dataTestId}-select-all`} onClick={handleSelectAll} theme={theme}>
                  {selectAllLabel}
                </StyledActionButton>
              )}
              {selectedValueState.length > 0 && clearAllOption && (
                <StyledActionButton data-testid={`${dataTestId}-clear`} onClick={handleClearAll} theme={theme}>
                  {clearAllLabel}
                </StyledActionButton>
              )}
            </StyledActionButtonWrapper>
          )}
        </StyledActionsWrapper>
        {selectOptions?.map((option: SelectOptionsType, index: number) => (
          <StyledOption
            theme={theme}
            key={option.value}
            value={option.value}
            onClick={() => handleOptionSelected(option)}
            height={numSize}
            selected={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
            selectStyle={type}
            disabled={disabled}
            data-testid={`${dataTestId}-option-${index}`}
          >
            {multiple && (
              <Checkbox
                data-testid={`${dataTestId}-option-checkbox-${index}`}
                labelText={option.name as string}
                value={option.value}
                onValueChange={() => null}
                checked={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
              />
            )}
            {!multiple && (
              <>
                <StyledWrapper data-testid={`${dataTestId}-option-label-${index}`} theme={theme}>
                  {option.icon}
                  {option.name}
                </StyledWrapper>
                {selectedValueState.find((el: SelectOptionsType) => el.value === option.value) && (
                  <StyledCheck theme={theme} selectStyle={type} color={IconColor.DigitalBlack} size={IconSize.Small} />
                )}
              </>
            )}
          </StyledOption>
        ))}
      </StyledOptionsWrapper>
    </StyledMainWrapper>
  );
  return (
    <StyledMainWrapper>
      {type !== SelectType.Inline && (
        <Label label={label} data-testid={`${dataTestId}-label`} disabled={disabled} htmlFor={id} />
      )}
      <StyledButtonContainer data-testid={dataTestId} ref={ref} selectStyle={type} theme={theme}>
        <Input
          data-testid={`${dataTestId}-search-input`}
          size={size === SelectSize.Medium ? InputSize.Medium : InputSize.Large}
          onValueChange={handleSearch}
          type={InputType.Search}
          value={displaySelectedValues()}
          icon={showOptionList ? IconName.ChevronUp : IconName.ChevronDown}
          iconPosition={InputIconPosition.Right}
          onFocus={() => toggleOptionList()}
        />
        {renderDefaultDropdown()}
      </StyledButtonContainer>

      {error && type !== SelectType.Inline && (
        <StyledError data-testid={`${dataTestId}-error`} theme={theme}>
          {error}
        </StyledError>
      )}
      {hint && !error && type !== SelectType.Inline && (
        <StyledHint data-testid={`${dataTestId}-hint`} disabled={disabled} theme={theme}>
          {hint}
        </StyledHint>
      )}
    </StyledMainWrapper>
  );
};
