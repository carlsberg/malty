import React from 'react';
import { Tooltip } from './Tooltip';
import { Position } from './Tooltip.types';

// sets the Component preview in gallery view
export const BasicTooltip = () => (
  <Tooltip position={Position.Right} isOpen>
    <button type="button" onClick={() => null}>
      Toggle
    </button>
  </Tooltip>
);
