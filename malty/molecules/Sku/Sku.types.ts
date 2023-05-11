export enum MRO {
  Mandatory = 'MANDATORY',
  Recommended = 'RECOMMENDED',
  Optional = 'OPTIONAL'
}

export interface SkuProps {
  dataTestId?: string;
  sku: string;
  mro?: MRO;
}
