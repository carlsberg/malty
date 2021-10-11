import React from 'react';
import { Label } from '.';

export const WrappedLabel = () => (
  <Label text="Wrapped label">
    <input type="text" />
  </Label>
);

export const StandaloneLabel = () => (
  <>
    <input type="checkbox" id="test" />
    <Label text="Stand-alone label" htmlFor="test" checkbox />
  </>
);

export const WrappedCheckboxLabel = () => (
  <Label text="Wrapped checkbox label" checkbox>
    <input type="checkbox" />
  </Label>
);
