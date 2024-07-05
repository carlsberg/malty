import { SpaceProps } from '@carlsberg/malty.utils.space';

export enum MRO {
  Mandatory = 'MANDATORY',
  Recommended = 'RECOMMENDED',
  Optional = 'OPTIONAL'
}

export interface SkuProps extends SpaceProps {
  dataTestId?: string;
  sku: string;
  mro?: MRO;
}
