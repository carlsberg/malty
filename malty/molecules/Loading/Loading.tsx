import {
  Icon,
  IconColors as Colors,
  IconNamesTypes,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import React from 'react';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, SizeTypes, LoadingStatus } from './Loading.types';

export const Loading = ({ text, size = SizeTypes.Medium, status = LoadingStatus.Pending }: LoadingProps) => {
  return (
    <StyledLoadingContainer size={size}>
      {
        status && status === LoadingStatus.Pending &&
        <>
          <StyledLoading size={size}>
            <Icon name={IconNamesTypes.Loading} color={Colors.Primary} size={IconSizes[size]}/>
          </StyledLoading>
          {text}
        </>
      }
    </StyledLoadingContainer>
  );
};
