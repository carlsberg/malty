import { Options, SplideProps } from '@splidejs/react-splide';

export interface CarouselProps extends SplideProps {
  autoHeight?: Options['autoHeight'];
  gapBetweenSliders?: Options['gap'];
  perPage?: Options['perPage'];
  enableNegativeCarouselStyle?: boolean;
  breakpoints?: Record<string | number, Options>;
  carouselSlide?: CarouselItemProps[];
  dataTestId?: string;
}

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}
