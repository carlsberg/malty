import { ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { MouseEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActions,
  StyledButton,
  StyledInputWrapper,
  StyledStock,
  StyledStockStatusColor
} from './ProductQuantityActions.styled';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export const ProductQuantityActions = ({
  stock,
  hideQuantityInput,
  actionQuantityInput = { value: '0', onValueChange: () => null },
  actionButton = { icon: IconName.Cart, onClick: () => null, style: ButtonStyle.Primary },
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
        {!hideQuantityInput ? (
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
        <StyledButton
          {...actionButton}
          text={actionButton.icon ? undefined : actionButton.text}
          fullWidth={hideQuantityInput}
          dataTestId={`${dataTestId}-button`}
          size={ButtonSize.Medium}
        />
      </StyledActions>
    </>
  );
};
