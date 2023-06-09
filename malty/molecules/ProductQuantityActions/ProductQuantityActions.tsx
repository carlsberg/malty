import { Button, ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { MouseEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActions,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledStock,
  StyledStockStatusColor
} from './ProductQuantityActions.styled';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export const ProductQuantityActions = ({
  stock,
  hideQuantityInput,
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
        <StyledStock theme={theme}>
          {stock.stockColor && <StyledStockStatusColor theme={theme} infoColor={stock.stockColor} />}
          <Text textStyle={TextStyle.SmallBold} color={stock.labelColor}>
            {stock.label}
          </Text>
          {stock.availability && (
            <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support100}>
              {stock.availability}
            </Text>
          )}
        </StyledStock>
      ) : null}
      <StyledActions theme={theme}>
        {actionQuantityInput && !hideQuantityInput ? (
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
        <StyledButtonWrapper hasIcon={!!actionButton.icon}>
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
