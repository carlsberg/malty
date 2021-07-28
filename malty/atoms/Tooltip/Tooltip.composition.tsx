import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Position } from './Tooltip.types';

// sets the Component preview in gallery view
export const BasicTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MaltyThemeProvider theme="global">
      <Tooltip position={Position.Bottom} content={<span>Contents</span>} isOpen>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Toggle
        </button>
      </Tooltip>
    </MaltyThemeProvider>
  );
};
