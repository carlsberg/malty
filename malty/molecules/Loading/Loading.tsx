import {
  Icon,
  IconColors as Colors,
  IconNamesTypes,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, LoadingStatus, SizeTypes } from './Loading.types';

export const Loading = ({ text, size = SizeTypes.Medium, status = LoadingStatus.Pending }: LoadingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [icon, setIcon] = useState<IconNamesTypes>(IconNamesTypes.Loading);

  useEffect(() => {
    switch (status) {
      case LoadingStatus.Success: {
        setIcon(IconNamesTypes.ItemCheck);
        break;
      }
      case LoadingStatus.Failure: {
        setIcon(IconNamesTypes.ItemClose);
        break;
      }
      default: {
        setIcon(IconNamesTypes.Loading);
        break;
      }
    }
  }, [status]);

  return (
    <>
      {status && (
        <StyledLoadingContainer size={size} theme={theme}>
          <StyledLoading size={size}>
            <Icon
              name={icon}
              color={Colors.Primary}
              size={IconSizes[size]}
              className={`${status === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${status}`}
            />
          </StyledLoading>
          {text}
        </StyledLoadingContainer>
      )}
    </>
  );
};
