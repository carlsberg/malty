import { Options, SplideProps } from '@splidejs/react-splide';

export type CarouselProps = {
  dataTestId?: string;
  negative?: boolean;
  carouselSlide: CarouselItemProps[];
  innerSpacingX?: boolean;
  ariaLabels?: CarouselAriaLabels;
  breakpoints?: Record<string | number, Pick<Options, 'perPage' | 'gap'>>;
} & Pick<SplideProps, 'onVisible'> &
  Pick<Options, 'gap' | 'perPage'>;

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}

export interface CarouselAriaLabels {
  prev?: string;
  next?: string;
  carousel?: string;
}
