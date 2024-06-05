import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.base-icon';
import { Image as ImageIcon } from '@carlsberggroup/malty.icons.image';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  fallbackSrc,
  dataTestId = 'image',
  className,
  onClick,
  removeBackground = false,
  ...props
}: ImageProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [hasImageError, setHasImageError] = useState(false);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc) {
      event.currentTarget.setAttribute('src', fallbackSrc);
    } else {
      setHasImageError(true);
    }
  };

  return (
    <StyledContainer onClick={onClick} className={className} theme={theme} {...props}>
      <StyledFigure data-testid={`${dataTestId}-figure`} theme={theme} height={height} width={width}>
        <StyledWrapper removeBackground={removeBackground} theme={theme}>
          <StyledOverlay
            data-testid={`${dataTestId}-overlay`}
            theme={theme}
            gradientPosition={gradient}
            overlay={overlay}
          >
            {children}
          </StyledOverlay>
          {hasImageError ? (
            <ImageIcon size={IconSize.ExtraLarge} color={IconColor.Support40} dataTestId="image-icon" />
          ) : (
            <StyledImage
              data-testid={`${dataTestId}`}
              onError={handleError}
              height={height || '100%'}
              width={width || '100%'}
              src={src}
              borderPosition={border}
              isCover={cover}
              alt={alt}
              theme={theme}
            />
          )}
        </StyledWrapper>
        <figcaption data-testid={`${dataTestId}-figcaption`}>{figcaption}</figcaption>
      </StyledFigure>
    </StyledContainer>
  );
};
