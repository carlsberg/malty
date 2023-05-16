import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { MouseEvent, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledActions, StyledStock, StyledStockStatusColor } from './ProductQuantityActions.styled';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export const ProductQuantityActions = ({
  stock,
  maxQuantity,
  hideQuantityInput,
  action = { icon: IconName.Cart, onClick: () => null, variant: ButtonStyle.Primary },
  onInputQuantityChange = () => null,
  dataTestId = 'default'
}: ProductQuantityActionsProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [quantityValue, setQuantityValue] = useState('');

  const handleQuantityChange = (value: string) => {
    onInputQuantityChange(value);
    setQuantityValue(value);
  };

  const handleActionClick = (event: MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    action?.onClick();
  };

  const handleStopPropagation = (event: MouseEvent<HTMLInputElement>) => {
    event?.stopPropagation();
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
          <Input
            onClick={handleStopPropagation}
            type={InputType.Quantity}
            onValueChange={handleQuantityChange}
            value={quantityValue}
            max={maxQuantity}
            size={InputSize.Medium}
            maxLength={maxQuantity}
            dataTestId={dataTestId}
          />
        ) : null}
        {action ? (
          <Button
            text={action.icon ? undefined : action.label}
            fullWidth={hideQuantityInput}
            dataTestId={`${dataTestId}-button`}
            size={ButtonSize.Medium}
            style={action.variant}
            onClick={handleActionClick}
            color={action.color}
            icon={action.icon}
          />
        ) : null}
      </StyledActions>
    </>
  );
};
