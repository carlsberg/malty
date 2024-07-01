import { Button, ButtonSize } from '@carlsberg/malty.atoms.button';
import { Input, InputSize, InputType } from '@carlsberg/malty.atoms.input';
import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { MouseEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActions,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledReadOnlyInput,
  StyledStock,
  StyledStockStatusColor,
  StyledWrapper
} from './ProductQuantityActions.styled';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export const ProductQuantityActions = ({
  stock,
  actionQuantityInput,
  actionButton,
  dataTestId = 'default',
  ...props
}: ProductQuantityActionsProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const isReadOnly = actionQuantityInput?.readOnly;

  const handleStopPropagation = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const renderContent = () => {
    if (!actionQuantityInput && !actionButton) return null;

    if (isReadOnly) {
      return <StyledReadOnlyInput readOnly type={InputType.Number} value={actionQuantityInput.value} />;
    }

    return (
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
        {actionButton ? (
          <StyledButtonWrapper hasIcon={!!actionButton.icon} hasActionQuantityInput={!!actionQuantityInput}>
            <Button
              {...actionButton}
              text={actionButton.icon ? undefined : actionButton.text}
              fullWidth
              dataTestId={`${dataTestId}-button`}
              size={ButtonSize.Medium}
            />
          </StyledButtonWrapper>
        ) : null}
      </StyledActions>
    );
  };

  return (
    <StyledWrapper {...props}>
      {stock ? (
        <StyledStock theme={theme} data-testid={`${dataTestId}-stock`}>
          {stock.stockColor && (
            <StyledStockStatusColor
              theme={theme}
              infoColor={stock.stockColor}
              data-testid={`${dataTestId}-stock-info`}
            />
          )}
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
      {renderContent()}
    </StyledWrapper>
  );
};
