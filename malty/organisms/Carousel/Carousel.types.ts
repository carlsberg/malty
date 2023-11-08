import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import { EventMap, Options } from '@splidejs/splide';

export type CarouselProps = {
  dataTestId?: string;
  negative?: boolean;
  carouselSlide: CarouselItemProps[];
  innerSpacingX?: boolean;
  ariaLabels?: CarouselAriaLabels;
  breakpoints?: Record<string | number, Pick<Options, 'perPage' | 'gap'>>;
  onVisible?: EventMap['visible'];
} & Pick<Options, 'gap' | 'perPage'> &
  SpaceProps;

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: React.ReactNode;
}

export interface CarouselAriaLabels {
  prev?: string;
  next?: string;
  carousel?: string;
}
