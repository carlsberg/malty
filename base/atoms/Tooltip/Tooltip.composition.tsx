import React from 'react';
import { Tooltip } from './Tooltip';
import { Position } from './Tooltip.types';

// sets the Component preview in gallery view
export const BasicTooltip = () => (
  <Tooltip position={Position.Bottom} content={<h3>Contents</h3>} isOpen>
    <button type="button">Toggle</button>
  </Tooltip>
);
