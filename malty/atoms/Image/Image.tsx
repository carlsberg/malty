/* eslint-disable no-param-reassign */
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ImageProps } from '.';
import { StyledContainer, StyledFigure, StyledImage, StyledOverlay, StyledWrapper } from './Image.styled';

export const Image = ({
  src,
  cover = false,
  border,
  gradient,
  alt,
  overlay,
  height,
  width,
  children,
  figcaption,
  fallbackSrc
}: ImageProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [test, setTest] = useState(false);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    } else {
      setTest(true);
    }
  };
  return (
    <TypographyProvider>
      <StyledContainer theme={theme}>
        <StyledFigure height={height} width={width}>
          <StyledWrapper>
            <StyledOverlay theme={theme} gradientPosition={gradient} overlay={overlay}>
              {children}
            </StyledOverlay>
            {!test && (
              <StyledImage
                // eslint-disable-next-line no-return-assign
                onError={(e) => handleError(e)}
                height={height || '100%'}
                width={width || '100%'}
                src={src}
                borderPosition={border}
                isCover={cover}
                alt={alt}
              />
            )}
            {test && <Icon size={IconSize.ExtraLarge} name={IconName.Image} color={IconColor.Support40} />}
          </StyledWrapper>
          <figcaption>{figcaption}</figcaption>
        </StyledFigure>
      </StyledContainer>
    </TypographyProvider>
  );
};
