import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
/* eslint-disable import/no-unresolved */
import '@splidejs/react-splide/css/core';
import React from 'react';
import { StyledCustomSplideArrows } from './Carousel.styled';
import { CarouselItemProps, CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  carouselSlide,
  breakpoints,
  negative,
  gap,
  perPage,
  containerPaddingLeftAndRight = '0',
  dataTestId
}) => {
  const hasMoreThanOneSlide = carouselSlide?.length > 1;

  const handlePerPageMaxLimit = (perPageCarousel: number) => {
    if (hasMoreThanOneSlide && perPageCarousel >= carouselSlide?.length) {
      return Number(carouselSlide?.length) - 1;
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
      aria-label="malty-carousel"
      options={carouselOptions}
      data-testid={`carousel-container-${dataTestId}`}
      role="group"
      style={{ padding: `0 ${containerPaddingLeftAndRight}` }}
    >
      <SplideTrack>
        {carouselSlide?.map((item: CarouselItemProps) => (
          <SplideSlide key={item.id} data-testid={item.slideDataTestId}>
            {item.slideComponent}
          </SplideSlide>
        ))}
      </SplideTrack>
      {hasMoreThanOneSlide ? (
        <StyledCustomSplideArrows>
          <div className="splide__arrows">
            <div className="splide__arrow splide__arrow--prev">
              <Button
                dataTestId={`prev-carousel-btn-${dataTestId}`}
                style={ButtonStyle.Primary}
                aria-label="prev-carousel-btn"
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
                aria-label="next-carousel-btn"
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
