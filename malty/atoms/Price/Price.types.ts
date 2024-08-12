import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface PriceProps extends SpaceProps {
  base?: string;
  discount?: string;
  credit?: string;
  dataTestId?: string;
}
