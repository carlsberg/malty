export enum MRO {
  mandatory = 'MANDATORY',
  recommended = 'RECOMMENDED',
  optional = 'OPTIONAL'
}

export interface SkuProps {
  dataTestId?: string;
  sku: string;
  mro?: MRO;
}
