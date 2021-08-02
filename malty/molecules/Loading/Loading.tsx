import {
  Icon,
  IconColors as Colors,
  IconNamesTypes,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, LoadingStatus, SizeTypes } from './Loading.types';

export const Loading = ({ text, size = SizeTypes.Medium, status = LoadingStatus.Pending }: LoadingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <>
      {status && (
        <StyledLoadingContainer size={size} theme={theme}>
          <StyledLoading size={size}>
            <Icon name={IconNamesTypes.Loading} color={Colors.Primary} size={IconSizes[size]} />
          </StyledLoading>
          {text}
        </StyledLoadingContainer>
      )}
    </>
  );
};
