import { ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Options, SplideProps } from '@splidejs/react-splide';

export interface CarouselProps extends Pick<SplideProps, 'onVisible'> {
  gap: Options['gap'];
  perPage: Options['perPage'];
  perMove?: Options['perMove'];
  negative?: boolean;
  breakpoints?: Record<string | number, Pick<Options, 'perPage' | 'perMove' | 'gap'>>;
  carouselSlide: CarouselItemProps[];
  arrowButtonSize?: ButtonSize;
  dataTestId?: string;
}

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}
