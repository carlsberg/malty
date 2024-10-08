import { Button, ButtonSize, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { ArrowSmallLeft } from '@carlsberg/malty.icons.arrow-small-left';
import { ArrowSmallRight } from '@carlsberg/malty.icons.arrow-small-right';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import Splide, { Options } from '@splidejs/splide';
import React, { useContext, useLayoutEffect, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCustomSplideArrows, StyledSplide, StyledSplideTrack } from './Carousel.styled';
import { CarouselItemProps, CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  carouselSlide,
  breakpoints,
  negative,
  gap,
  perPage = 1,
  innerSpacingX = false,
  ariaLabels,
  dataTestId,
  onVisible,
  ...props
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const options: Options = useMemo(
    () => ({
      type: 'loop',
      // This needs to be sent completly empty because when perPage is sent as undefined the perPage value will always be 1 when isOverflow
      ...(breakpoints && Object.keys(breakpoints).length > 0 ? {} : { perPage }),
      gap,
      mediaQuery: 'min',
      breakpoints,
      padding: { left: theme.sizes['5xs'].value, right: theme.sizes['5xs'].value, bottom: theme.sizes['4xs'].value }
    }),
    [breakpoints, gap, perPage, theme]
  );

  useLayoutEffect(() => {
    const splide = new Splide('.splide', options);

    splide.on('overflow', (isOverflow: boolean) => {
      splide.options = {
        keyboard: isOverflow ? 'global' : false,
        pagination: isOverflow,
        arrows: isOverflow,
        clones: isOverflow ? undefined : 0,
        drag: isOverflow
      };
    });

    if (onVisible) {
      splide.on('visible', onVisible);
    }

    splide.mount();
  }, [options, onVisible]);

  return (
    <StyledSplide
      data-testid={`carousel-container-${dataTestId}`}
      className="splide"
      aria-label={ariaLabels?.carousel}
      theme={theme}
      innerSpacingX={innerSpacingX}
      {...props}
    >
      <StyledSplideTrack className="splide__track" theme={theme}>
        <ul className="splide__list">
          {carouselSlide?.map((item: CarouselItemProps) => (
            <li className="splide__slide" key={item.id} data-testid={item.slideDataTestId}>
              {item.slideComponent}
            </li>
          ))}
        </ul>
      </StyledSplideTrack>
      <StyledCustomSplideArrows theme={theme}>
        <div className="splide__arrows">
          <div className="splide__arrow splide__arrow--prev">
            <Button
              dataTestId={`prev-carousel-btn-${dataTestId}`}
              style={ButtonStyle.Primary}
              aria-label={ariaLabels?.prev}
              tabIndex={0}
              negative={negative}
              size={ButtonSize.Medium}
              icon={<ArrowSmallLeft />}
            />
          </div>
          <div className="splide__arrow splide__arrow--next">
            <Button
              dataTestId={`next-carousel-btn-${dataTestId}`}
              style={ButtonStyle.Primary}
              aria-label={ariaLabels?.next}
              tabIndex={0}
              negative={negative}
              size={ButtonSize.Medium}
              icon={<ArrowSmallRight />}
            />
          </div>
        </div>
      </StyledCustomSplideArrows>
    </StyledSplide>
  );
};
