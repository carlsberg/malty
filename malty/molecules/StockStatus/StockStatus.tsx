import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledStockStatus, StyledStockStatusInfo } from './StockStatus.styled';
import { StockStatusProps } from './StockStatus.types';

export const StockStatus = ({
  label,
  labelColor,
  stockColor,
  availability,
  dataTestId,
  withMarginBottom
}: StockStatusProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledStockStatus theme={theme} data-testid={dataTestId} withMarginBottom={withMarginBottom}>
      {stockColor && <StyledStockStatusInfo theme={theme} infoColor={stockColor} data-testid={`${dataTestId}-info`} />}
      <Text textStyle={TextStyle.SmallBold} color={labelColor} dataQaId={`${dataTestId}-label`}>
        {label}
      </Text>
      {availability && (
        <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support100} dataQaId={`${dataTestId}-availability`}>
          {availability}
        </Text>
      )}
    </StyledStockStatus>
  );
};
