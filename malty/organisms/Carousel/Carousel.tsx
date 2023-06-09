import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  const carouselOptions: Options = {
    type: 'loop',
    start: 4,
    perPage: 1,
    arrows: true,
    height: '300px',
    pagination: true,
    gap: '1rem',
    mediaQuery: 'min'
  };

  return (
    <Splide hasTrack={false} aria-label="malty-carousel" options={carouselOptions}>
      <SplideTrack>
        <SplideSlide>{children}</SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <div className="splide__arrow splide__arrow--prev">
          <Button
            dataTestId={`${dataTestId}-page-${pageNr}`}
            style={ButtonStyle.Transparent}
            selected={isCurrentPage}
            onClick={() => onPageClick(Number(pageNr))}
            onKeyUp={() => onPageKeyUp(Number(pageNr))}
            aria-current={isCurrentPage}
            aria-label={isCurrentPage ? `Page ${pageNr}` : `Go to page ${pageNr}`}
            tabIndex={0}
            text={pageNr}
            negative={isWhite}
            size={buttonSize}
          />
        </div>
        <div className="splide__arrow splide__arrow--next">
          <Button
            dataTestId={`${dataTestId}-page-${pageNr}`}
            style={ButtonStyle.Transparent}
            selected={isCurrentPage}
            onClick={() => onPageClick(Number(pageNr))}
            onKeyUp={() => onPageKeyUp(Number(pageNr))}
            aria-current={isCurrentPage}
            aria-label={isCurrentPage ? `Page ${pageNr}` : `Go to page ${pageNr}`}
            tabIndex={0}
            text={pageNr}
            negative={isWhite}
            size={buttonSize}
          />
        </div>
      </div>
    </Splide>
  );
};

export { Carousel };
