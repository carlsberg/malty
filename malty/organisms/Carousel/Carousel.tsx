import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
/* eslint-disable import/no-unresolved */
import '@splidejs/react-splide/css';
import React from 'react';
import { CarouselItemProps, CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  carouselSlide,
  autoHeight,
  breakpoints,
  enableNegativeCarouselStyle,
  gapBetweenSliders,
  perPage,
  dataTestId
}) => {
  const carouselOptions: Options = {
    type: 'loop',
    start: 4,
    perPage,
    arrows: true,
    height: '300px',
    pagination: true,
    gap: gapBetweenSliders,
    mediaQuery: 'min',
    breakpoints,
    autoHeight
  };

  return (
    <Splide
      hasTrack={false}
      aria-label="malty-carousel"
      options={carouselOptions}
      data-testid={`carousel-container-${dataTestId}`}
    >
      <SplideTrack>
        {carouselSlide?.map((item: CarouselItemProps) => (
          <SplideSlide key={item.id} data-testid={item.slideDataTestId}>
            {item.slideComponent}
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__arrows">
        <div className="splide__arrow splide__arrow--prev">
          <Button
            dataTestId={`prev-carousel-btn-${dataTestId}`}
            style={enableNegativeCarouselStyle ? ButtonStyle.Primary : ButtonStyle.Secondary}
            // selected={isCurrentPage}
            // onClick={() => onPageClick(Number(pageNr))}
            // onKeyUp={() => onPageKeyUp(Number(pageNr))}
            // aria-current={isCurrentPage}
            aria-label="prev-carousel-btn"
            // tabIndex={0}
            negative={enableNegativeCarouselStyle}
            size={ButtonSize.Small}
            icon={IconName.ArrowSmallLeft}
          />
        </div>
        <div className="splide__arrow splide__arrow--next">
          <Button
            dataTestId={`next-carousel-btn-${dataTestId}`}
            style={enableNegativeCarouselStyle ? ButtonStyle.Primary : ButtonStyle.Secondary}
            // selected={isCurrentPage}
            // onClick={() => onPageClick(Number(pageNr))}
            // onKeyUp={() => onPageKeyUp(Number(pageNr))}
            // aria-current={isCurrentPage}
            aria-label="next-carousel-btn"
            // tabIndex={0}
            negative={enableNegativeCarouselStyle}
            size={ButtonSize.Small}
            icon={IconName.ArrowSmallRight}
          />
        </div>
      </div>
    </Splide>
  );
};
