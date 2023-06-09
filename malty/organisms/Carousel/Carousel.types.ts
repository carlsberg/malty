import { Options, SplideProps } from '@splidejs/react-splide';

export interface CarouselProps {
  type: 'loop';
  start: 4;
  perPage: 1;
  arrows: true;
  height: '300px';
  pagination: true;
  gap: '1rem';

  carouselOptions: SplideProps['options'];
  showNavigationArrows: boolean;
  showPagination: SplideProps['options'];
  isPaginationClickable?: Options['isNavigationClickable'];
  autoHeight?: Options['autoHeight'];
  enableLoop?: Options['loop'];
  enableMouseWheel?: boolean;
  enableKeyboard?: boolean;
  enableNegativeCarouselStyle?: string;
  breakpoints?: Record<string | number, ResponsiveOptions>;
  carouselSlide: React.ReactNode[] | JSX.Element[];

  // icon?: IconName;
  // size?: AlertInlineSize;
  // color: AlertInlineColor;
  // dataQaId?: string;
  // firstAction?: () => void;
  // firstActionText?: string;
  // secondAction?: () => void;
  // secondActionText?: string;
  // message: string;
  // title?: string;
}
