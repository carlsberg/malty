import React from 'react';
import { Button } from './button';
import { Type } from './button.types';

// sets the Component preview in gallery view
export const BasicButton = () => <Button buttonType={Type.Link}>click me</Button>;
