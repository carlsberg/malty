import { IconSize } from '@carlsberg/malty.atoms.base-icon';
import { ButtonType } from '@carlsberg/malty.atoms.button';
import { Checkbox } from '@carlsberg/malty.atoms.checkbox';
import { Input, InputSize, InputType } from '@carlsberg/malty.atoms.input';
import { Label } from '@carlsberg/malty.atoms.label';
import { Search } from '@carlsberg/malty.icons.search';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { createRef, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  StyledActionButton,
  StyledActionButtonWrapper,
  StyledActionsWrapper,
  StyledButton,
  StyledButtonContainer,
  StyledCheck,
  StyledChevronDown,
  StyledError,
  StyledHint,
  StyledMainWrapper,
  StyledOption,
  StyledOptionsWrapper,
  StyledSearchWrapper,
  StyledSelectedOptionsWrapper,
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
  dataTestId = 'select',
  readOnly,
  selectAllLabel = 'Select all',
  clearAllLabel = 'Clear all',
  clearAllOption = true,
  alignPosition = SelectPosition.Left,
  required = false,
  onBlur,
  optionsZIndex = 2,
  ...props
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
  }, [defaultValue, value]);

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
    const filterOptions = options?.filter((el) => el.name.toUpperCase().includes(query.toUpperCase()));

    setQueryText(query);
    setSelectOptions(filterOptions);
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
        zIndex={optionsZIndex}
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
                icon={<Search />}
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
        {!disabled &&
          !readOnly &&
          selectOptions?.map((option: SelectOptionsType, index: number) => (
            <StyledOption
              theme={theme}
              key={option.value}
              value={option.value}
              onClick={() => handleOptionSelected(option)}
              height={numSize}
              selected={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
              selectStyle={type}
              data-testid={`${dataTestId}-option-${index}`}
            >
              {multiple && (
                <Checkbox
                  fullWidth
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
                    <StyledCheck theme={theme} $selectStyle={type} size={IconSize.Small} />
                  )}
                </>
              )}
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </StyledMainWrapper>
  );

  return (
    <StyledMainWrapper data-testid={dataTestId} {...props}>
      {type !== SelectType.Inline && (
        <Label label={label} data-testid={`${dataTestId}-label`} disabled={disabled} required={required} htmlFor={id} />
      )}
      <StyledButtonContainer data-testid={`${dataTestId}-button-wrapper`} ref={ref} selectStyle={type} theme={theme}>
        <StyledButton
          name={id}
          id={id}
          theme={theme}
          isActive={selectedValueState?.length > 0 || type === SelectType.Inline}
          selectStyle={type}
          height={numSize}
          onClick={toggleOptionList}
          disabled={disabled}
          readOnly={readOnly}
          isError={!!error && type !== SelectType.Inline}
          open={showOptionList}
          type={ButtonType.Default}
          data-testid={`${dataTestId}-button`}
          onBlur={onBlur}
        >
          <StyledSelectedOptionsWrapper theme={theme} data-testid={`${dataTestId}-selected-values`}>
            {displaySelectedValues()}
          </StyledSelectedOptionsWrapper>
          <StyledChevronDown
            theme={theme}
            selectStyle={type}
            disabled={disabled}
            readOnly={readOnly}
            open={showOptionList}
          />
        </StyledButton>

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
