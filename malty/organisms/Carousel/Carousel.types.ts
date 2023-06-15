import { Options, SplideProps } from '@splidejs/react-splide';

export interface CarouselProps extends Pick<SplideProps, 'onVisible'> {
  gap: Options['gap'];
  perPage: Options['perPage'];
  containerPaddingLeftAndRight?: number | string;
  negative?: boolean;
  breakpoints?: Record<string | number, Pick<Options, 'perPage' | 'gap'>>;
  carouselSlide: CarouselItemProps[];
  dataTestId?: string;
}

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}
