import { Options, SplideProps } from '@splidejs/react-splide';

export type CarouselProps = {
  dataTestId?: string;
  negative?: boolean;
  carouselSlide: CarouselItemProps[];
  containerPaddingLeftAndRight?: number | string;
  breakpoints?: Record<string | number, Pick<Options, 'perPage' | 'gap'>>;
} & Pick<SplideProps, 'onVisible'> &
  Pick<Options, 'gap' | 'perPage'>;
``

I think in this case we should go for the Pick<> logic so we don't need to rewrite the name of the props again in case are the same and no need to extend from the Pick<SplideProps>
 
On the CarouselItemProps I see the benefit of having the SplideProps['children'] so then we can rename the prop

export interface CarouselItemProps {
  id?: string | number;
  slideDataTestId?: string;
  slideComponent?: SplideProps['children'];
}
