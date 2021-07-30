import React from 'react';
import { Loading } from './Loading';
import { LoadingStatus, SizeTypes } from './Loading.types';

export const BasicCodeInput = () => (
  <Loading text="Loading..." size={SizeTypes.Medium} status={LoadingStatus.Default} />
);
