import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPrice, StyledPriceContainer } from './Price.styled';
import { PriceProps } from './Price.types';

export const Price = ({ base, discount, credit, dataTestId = 'default', ...props }: PriceProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledPriceContainer theme={theme} data-testid={dataTestId} {...props}>
      {base && !credit ? (
        <StyledPrice
          theme={theme}
          discount={!!discount}
          dataTestId={`${dataTestId}-price`}
          color={discount ? TextColor.Support60 : TextColor.DigitalBlack}
          textStyle={discount ? TextStyle.MediumSmallDefaultUnderline : TextStyle.MediumSmallDefault}
        >
          {base}
        </StyledPrice>
      ) : null}
      {discount && !credit ? (
        <Text
          dataTestId={`${dataTestId}-discount-price`}
          color={TextColor.AlertStrong}
          textStyle={TextStyle.MediumSmallBold}
        >
          {discount}
        </Text>
      ) : null}
      {credit ? (
        <Text dataTestId={`${dataTestId}-credit-price`} color={TextColor.Success} textStyle={TextStyle.MediumSmallBold}>
          {credit}
        </Text>
      ) : null}
    </StyledPriceContainer>
  );
};
