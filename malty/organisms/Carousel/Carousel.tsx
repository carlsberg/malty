/* eslint-disable import/no-unresolved */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Options, Splide, SplideEventHandlers, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCustomSplideArrows } from './Carousel.styled';
import { CarouselItemProps, CarouselProps } from './Carousel.types';

export const Carousel: React.FC<CarouselProps> = ({
  carouselSlide,
  breakpoints,
  negative,
  gap,
  perPage = 1,
  innerSpacingX,
  ariaLabels,
  onVisible,
  dataTestId
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [areActionsVisible, setAreActionsVisible] = useState(true);

  const options: Options = {
    type: 'loop',
    // This needs to be sent completly empty because when this perPage is sent as undefined the perPage value will always be 1 when isOverflow
    ...(breakpoints && Object.keys(breakpoints).length > 0 ? {} : { perPage }),
    gap,
    mediaQuery: 'min',
    breakpoints,
    padding: { left: theme.sizes['5xs'].value, right: theme.sizes['5xs'].value, bottom: theme.sizes['4xs'].value },
    clones: areActionsVisible ? undefined : 0
  };

  const handleOnOverflow: SplideEventHandlers['onOverflow'] = (_, isOverflow) => {
    setAreActionsVisible(isOverflow);
  };

  return (
    <Splide
      role="group"
      hasTrack={false}
      options={options}
      aria-label={ariaLabels?.carousel}
      data-testid={`carousel-container-${dataTestId}`}
      style={{ padding: `0 ${innerSpacingX ? theme.sizes['2xs'].value : '0'}` }}
      onVisible={onVisible}
      onOverflow={handleOnOverflow}
    >
      <SplideTrack style={{ paddingBottom: `${theme.sizes['4xs'].value}` }}>
        {carouselSlide?.map((item: CarouselItemProps) => (
          <SplideSlide key={item.id} data-testid={item.slideDataTestId}>
            {item.slideComponent}
          </SplideSlide>
        ))}
      </SplideTrack>
      {areActionsVisible ? (
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
