import React from 'react';
import { Checkbox } from './Checkbox';

export const UndeterminedCheckbox = () => <Checkbox value="Undetermined checkbox" onValueChange={() => null} />;

export const CheckedCheckbox = () => <Checkbox value="Checked checkbox" checked onValueChange={() => null} />;

export const UnckeckedCheckbox = () => (
  <Checkbox value="Unchecked checkbox" checked={false} onValueChange={() => null} />
);
