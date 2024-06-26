import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { getMROType } from './Sku.helper';
import { StyledMRO, StyledWrapper } from './Sku.styled';
import { SkuProps } from './Sku.types';

export const Sku = ({ sku, mro, dataTestId = 'default', ...props }: SkuProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper theme={theme} {...props}>
      {mro && (
        <StyledMRO theme={theme}>
          <Text dataTestId={`${dataTestId}-mro`} textStyle={TextStyle.TinyBold} color={TextColor.White}>
            {getMROType(mro)}
          </Text>
        </StyledMRO>
      )}
      <Text dataTestId={`${dataTestId}-sku`} textStyle={TextStyle.SmallDefault} color={TextColor.Support80}>
        {sku}
      </Text>
    </StyledWrapper>
  );
};
