import { MRO } from './Sku.types';

export const getMROType = (mro: MRO) => {
  switch (mro) {
    case MRO.Recommended:
      return 'R';
    case MRO.Optional:
      return 'O';
    case MRO.Mandatory:
    default:
      return 'M';
  }
};
