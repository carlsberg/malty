import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

export const Loading = ({ text, size = LoadingSize.Medium, status = LoadingStatus.Pending }: LoadingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [icon, setIcon] = useState<IconName>(IconName.Loading);
  const [iconSize, setIconSize] = useState<IconSize>(IconSize.Medium);
  const [numSize, setNumSize] = useState(theme.sizes.m.value.replace('px', ''));

  useEffect(() => {
    switch (size) {
      case LoadingSize.Small: {
        setNumSize(theme.sizes.m.value);
        setIconSize(IconSize.Medium);
        break;
      }
      default: {
        setNumSize(theme.sizes['2xl'].value);
        setIconSize(IconSize.Large);
        break;
      }
    }
  }, [size, theme]);

  useEffect(() => {
    switch (status) {
      case LoadingStatus.Success: {
        setIcon(IconName.ItemCheck);
        break;
      }
      case LoadingStatus.Failure: {
        setIcon(IconName.ItemClose);
        break;
      }
      default: {
        setIcon(IconName.Loading);
        break;
      }
    }
  }, [status]);

  return (
    <>
      {status && (
        <StyledLoadingContainer theme={theme}>
          <StyledLoading size={numSize}>
            <Icon
              name={icon}
              color={IconColor.Primary}
              size={iconSize}
              className={`${status === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${status}`}
            />
          </StyledLoading>
          <TypographyProvider>{text}</TypographyProvider>
        </StyledLoadingContainer>
      )}
    </>
  );
};
