import { ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Options, SplideProps } from '@splidejs/react-splide';

export interface CarouselProps extends SplideProps {
  gapBetweenSliders: Options['gap'];
  perPage: Options['perPage'];
  perMove?: Options['perMove'];
  enableNegativeCarouselStyle?: boolean;
  breakpoints?: Record<string | number, Options>;
  carouselSlide: CarouselItemProps[];
  arrowButtonSize?: ButtonSize;
  dataTestId?: string;
}

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}
