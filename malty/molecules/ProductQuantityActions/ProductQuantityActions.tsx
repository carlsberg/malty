import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledFooter, StyledStock, StyledStockInformation } from './ProductQuantityActions.styled';
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

  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    action?.onClick();
  };

  return (
    <>
      {stock ? (
        <StyledStock theme={theme}>
          <StyledStockInformation theme={theme} infoColor={stock.stockColor} />
          <Text textStyle={TextStyle.SmallBold} color={stock.labelColor}>
            {stock.label}
          </Text>
        </StyledStock>
      ) : null}
      <StyledFooter theme={theme}>
        {!hideQuantityInput ? (
          <Input
            onClick={(e) => e.stopPropagation()}
            type={InputType.Quantity}
            onValueChange={(value) => handleQuantityChange(value)}
            value={quantityValue}
            max={maxQuantity}
            size={InputSize.Medium}
            maxLength={maxQuantity}
          />
        ) : null}
        {action ? (
          <Button
            text={action?.icon ? undefined : action?.label}
            fullWidth={hideQuantityInput}
            dataTestId={`${dataTestId}-button`}
            size={ButtonSize.Medium}
            style={action.variant}
            onClick={(e) => handleActionClick(e)}
            color={action?.color}
            icon={action?.icon}
          />
        ) : null}
      </StyledFooter>
    </>
  );
};
