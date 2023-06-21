/* eslint-disable import/no-unresolved */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCustomSplideArrows } from './Carousel.styled';
import { CarouselItemProps, CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  carouselSlide,
  breakpoints,
  negative,
  gap,
  perPage,
  innerSpacingX,
  ariaLabels,
  onVisible,
  dataTestId
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const slidesAmount = carouselSlide?.length ?? 0;
  const hasMoreThanOneSlide = slidesAmount > 1;

  const handlePerPageMaxLimit = (perPageCarousel: number) => {
    if (hasMoreThanOneSlide && perPageCarousel >= slidesAmount) {
      return slidesAmount - 1;
    }
    return perPageCarousel;
  };

  const carouselOptions: Options = {
    type: hasMoreThanOneSlide ? 'loop' : 'slide',
    perPage: perPage ? handlePerPageMaxLimit(perPage) : 1,
    arrows: hasMoreThanOneSlide,
    pagination: hasMoreThanOneSlide,
    paginationKeyboard: hasMoreThanOneSlide,
    gap,
    mediaQuery: 'min',
    breakpoints
  };

  return (
    <Splide
      hasTrack={false}
      options={carouselOptions}
      data-testid={`carousel-container-${dataTestId}`}
      role="group"
      style={{ padding: `0 ${innerSpacingX && '8px'}` }}
      onVisible={onVisible}
      aria-label={ariaLabels?.carousel}
    >
      <SplideTrack>
        {carouselSlide?.map((item: CarouselItemProps) => (
          <SplideSlide key={item.id} data-testid={item.slideDataTestId}>
            {item.slideComponent}
          </SplideSlide>
        ))}
      </SplideTrack>
      {hasMoreThanOneSlide ? (
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
                icon={IconName.ArrowSmallLeft}
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
                icon={IconName.ArrowSmallRight}
              />
            </div>
          </div>
        </StyledCustomSplideArrows>
      ) : null}
    </Splide>
  );
};
