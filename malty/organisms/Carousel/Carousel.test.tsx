import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { ProductCard } from '@carlsberggroup/malty.molecules.product-card';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Carousel } from './Carousel';
import { CarouselItemProps } from './Carousel.types';

const carouseSlideObject: CarouselItemProps[] = [
  {
    id: 1,
    slideComponent: (
      <ProductCard
        actionButton={{ style: ButtonStyle.Primary }}
        imageSrc="https://picsum.photos/id/55/1920/1080"
        title="Product 1"
        dataTestId="product-card-1"
        sku="Sku: 12512 512"
        price={{ base: '₭ 99,800.00', discount: '₭ 86,000.00' }}
      />
    ),
    slideDataTestId: 'carousel-1'
  },
  {
    id: 2,
    slideComponent: (
      <ProductCard
        actionButton={{ style: ButtonStyle.Primary }}
        imageSrc="https://picsum.photos/id/80/1920/1080"
        title="Product 2"
        dataTestId="product-card-2"
        sku="Sku: 12512 515"
        price={{ base: '₭ 90,800.00' }}
      />
    ),
    slideDataTestId: 'carousel-2'
  },
  {
    id: 3,
    slideComponent: (
      <ProductCard
        actionButton={{ style: ButtonStyle.Primary }}
        imageSrc="https://picsum.photos/id/60/1920/1080"
        title="Product 3"
        dataTestId="product-card-3"
        sku="Sku: 12512 516"
        price={{ base: '₭ 19,800.00', discount: '₭ 6,000.00' }}
      />
    ),
    slideDataTestId: 'carousel-3'
  },
  {
    id: 4,
    slideComponent: (
      <ProductCard
        actionButton={{ style: ButtonStyle.Primary }}
        imageSrc="https://picsum.photos/id/50/1920/1080"
        title="Product 4"
        dataTestId="product-card-4"
        sku="Sku: 12512 517"
        price={{ base: '₭ 99,800.00', discount: '₭ 86,000.00' }}
      />
    ),
    slideDataTestId: 'carousel-4'
  },
  {
    id: 5,
    slideComponent: (
      <ProductCard
        actionButton={{ style: ButtonStyle.Primary }}
        imageSrc="https://picsum.photos/id/10/1920/1080"
        title="Product 5"
        dataTestId="product-card-5"
        sku="Sku: 12512 518"
        price={{ base: '₭ 59,800.00' }}
      />
    ),
    slideDataTestId: 'carousel-5'
  }
];

describe('Carousel', () => {
  beforeAll(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    window.matchMedia = () =>
      ({
        matches: false, // All queries match the media string.
        media: '',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      } as MediaQueryList);
  });

  // TODO: Skipped because isOverflow function always returns false (so the arrows and pagination are not visible)
  // and we couldn't make the test run, the idea is to work on this in the future to find a proper solution
  // eslint-disable-next-line jest/no-commented-out-tests
  it.skip('should render carousel with custom arrows, pagination and slides', () => {
    const getBoundingClientRectSpy = jest.fn(() => ({ width: 100 }));

    render(
      <Carousel
        carouselSlide={carouseSlideObject}
        perPage={1}
        gap={0}
        dataTestId="test"
        ariaLabels={{ prev: 'prev-carousel-btn', next: 'next-carousel-btn' }}
      />
    );

    // container.getBoundingClientRect = jest.fn(() => ({
    //   x: 1000,
    //   y: 800,
    //   width: 1000,
    //   height: 800,
    //   top: 20,
    //   right: 20,
    //   bottom: 20,
    //   left: 20,
    //   toJSON: jest.fn()
    // }));

    expect(screen.getByTestId('carousel-container-test')).toBeVisible();
    expect(screen.getByRole('button', { name: /prev-carousel-btn/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /next-carousel-btn/i })).toBeVisible();
    expect(screen.getByRole('tab', { name: /go to slide 1/i })).toBeVisible();
    expect(screen.getAllByTestId('carousel-1')[0]).toBeVisible();
    expect(screen.queryAllByTestId('carousel-2')[0]).toBeVisible();
    expect(screen.queryAllByTestId('carousel-3')[0]).toBeVisible();
    expect(screen.queryAllByTestId('carousel-4')[0]).toBeVisible();
    expect(screen.queryAllByTestId('carousel-5')[0]).toBeVisible();
  });

  it('should NOT render custom arrows and pagination when is only one slide', () => {
    const oneSlideObject: CarouselItemProps[] = carouseSlideObject.slice(0, 1);

    render(
      <Carousel
        carouselSlide={oneSlideObject}
        perPage={1}
        dataTestId="test"
        ariaLabels={{ prev: 'prev-carousel-btn', next: 'next-carousel-btn' }}
      />
    );

    expect(screen.getByTestId('carousel-container-test')).toBeVisible();
    expect(screen.queryByRole('button', { name: /prev-carousel-btn/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next-carousel-btn/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: /go to slide 1/i })).not.toBeInTheDocument();
    expect(screen.getByTestId('carousel-1')).toBeVisible();
  });
});
