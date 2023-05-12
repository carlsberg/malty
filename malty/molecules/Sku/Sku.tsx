import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { getMROType } from './Sku.helper';
import { StyledMRO } from './Sku.styled';
import { SkuProps } from './Sku.types';

export const Sku = ({ sku, mro, dataTestId = 'sku' }: SkuProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <>
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
    </>
  );
};
