import { Button, ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { StockStatus } from '@carlsberggroup/malty.molecules.stock-status';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { MouseEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledActions, StyledButtonWrapper, StyledInputWrapper } from './ProductQuantityActions.styled';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export const ProductQuantityActions = ({
  stock,
  actionQuantityInput,
  actionButton,
  dataTestId = 'default'
}: ProductQuantityActionsProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const handleStopPropagation = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {stock ? (
        <StockStatus
          withMarginBottom
          label={stock.label}
          labelColor={stock.labelColor}
          stockColor={stock.stockColor}
          availability={stock.availability}
        />
      ) : null}
      <StyledActions theme={theme}>
        {actionQuantityInput ? (
          <StyledInputWrapper>
            <Input
              {...actionQuantityInput}
              onClick={handleStopPropagation}
              type={InputType.Quantity}
              size={InputSize.Medium}
              dataTestId={dataTestId}
            />
          </StyledInputWrapper>
        ) : null}
        <StyledButtonWrapper hasIcon={!!actionButton.icon} hasActionQuantityInput={!!actionQuantityInput}>
          <Button
            {...actionButton}
            text={actionButton.icon ? undefined : actionButton.text}
            fullWidth
            dataTestId={`${dataTestId}-button`}
            size={ButtonSize.Medium}
          />
        </StyledButtonWrapper>
      </StyledActions>
    </>
  );
};
