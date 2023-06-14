import { Image } from '@carlsberggroup/malty.atoms.image';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Carousel } from './Carousel';
import { CarouselItemProps } from './Carousel.types';

const carouseSlideObject: CarouselItemProps[] = [
  {
    id: 1,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  },

  {
    id: 2,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  },
  {
    id: 3,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  },
  {
    id: 4,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  },
  {
    id: 5,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  },
  {
    id: 6,
    slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
    slideDataTestId: 'carousel'
  }
];

describe('Carousel', () => {
  it('should render carousel with custom arrows and pagination', () => {
    render(<Carousel carouselSlide={carouseSlideObject} perPage={1} gapBetweenSliders={0} />);
    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });

  it('should render carousel with one slide perPage', () => {
    render(<Carousel carouselSlide={carouseSlideObject} perPage={1} gapBetweenSliders={0} />);
    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });

  it('should render carousel with two slides perPage', () => {
    render(<Carousel carouselSlide={carouseSlideObject} perPage={2} gapBetweenSliders={0} />);
    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });

  it('should render carousel with three slides perPage and change the current slide once user clicks on arrow right', () => {
    render(<Carousel carouselSlide={carouseSlideObject} perPage={3} gapBetweenSliders={0} />);
    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });

  it('should NOT render arrows and pagination when there is only one slide', () => {
    render(<Carousel carouselSlide={carouseSlideObject} perPage={1} gapBetweenSliders={0} />);
    expect(screen.getByTestId('carousel-container')).toBeInTheDocument();
  });
});
