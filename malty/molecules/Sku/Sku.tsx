/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledMRO, StyledWrapper } from './Sku.styled';
import { MRO, SkuProps } from './Sku.types';

export const getMROType = (mro: MRO) => {
  switch (mro) {
    case MRO.recommended:
      return 'R';
    case MRO.optional:
      return 'O';
    case MRO.mandatory:
    default:
      return 'M';
  }
};

export const Sku = ({ sku, mro, dataTestId }: SkuProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <StyledWrapper>
      {mro && (
        <StyledMRO theme={theme}>
          <Text dataQaId={`${dataTestId}-mro`} textStyle={TextStyle.TinyBold} color={TextColor.White}>
            {getMROType(mro)}
          </Text>
        </StyledMRO>
      )}
      <Text dataQaId={`${dataTestId}-sku`} textStyle={TextStyle.SmallDefault} color={TextColor.Support80}>
        {sku}
      </Text>
    </StyledWrapper>
  );
};
