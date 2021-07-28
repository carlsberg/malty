import { Icon, IconColors as Colors, IconSizesTypes as IconSizes, IconNamesTypes } from '@carlsberg/malty.atoms.icon';
import React from 'react';
import {
  StyledLoading,
  StyledLoadingContainer,
} from './Loading.styled';
import { LoadingProps, SizeTypes, LoadingStatus } from './Loading.types';

export const Loading = ({
  text,
  size = SizeTypes.Medium,
  status = LoadingStatus.Default,
}: LoadingProps) => {
  return (
      <>
        {status &&
        <StyledLoadingContainer size={size}>
          <StyledLoading>
            <Icon name={IconNamesTypes.Loading} color={Colors.Primary} size={IconSizes[size]}/>
          </StyledLoading>
          {text}
        </StyledLoadingContainer>}
      </>
  );
};
