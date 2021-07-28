import {
  Icon,
  IconColors as Colors,
  IconNamesTypes,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import React from 'react';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, LoadingStatus, SizeTypes } from './Loading.types';

export const Loading = ({ text, size = SizeTypes.Medium, status = LoadingStatus.Default }: LoadingProps) => {
  return (
    <>
      {status && (
        <StyledLoadingContainer size={size}>
          <StyledLoading>
            <Icon name={IconNamesTypes.Loading} color={Colors.Primary} size={IconSizes[size]} />
          </StyledLoading>
          {text}
        </StyledLoadingContainer>
      )}
    </>
  );
};
