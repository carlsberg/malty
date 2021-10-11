import React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { Position } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 650px;
`;

// sets the Component preview in gallery view
export const TopTooltip = () => (
  <StyledContainer>
    <p id="testIdTop">This is the anchor</p>
    <Tooltip anchor="testIdTop" position={Position.Top} isOpen>
      This is the content
    </Tooltip>
  </StyledContainer>
);

export const RightTooltip = () => (
  <StyledContainer>
    <p id="testIdRight">This is the anchor</p>
    <Tooltip anchor="testIdRight" position={Position.Right} isOpen>
      This is the content
    </Tooltip>
  </StyledContainer>
);

export const BottomTooltip = () => (
  <StyledContainer>
    <p id="testIdBottom">This is the anchor</p>
    <Tooltip anchor="testIdBottom" position={Position.Bottom} isOpen>
      This is the content
    </Tooltip>
  </StyledContainer>
);

export const LeftTooltip = () => (
  <StyledContainer>
    <p id="testIdLeft">This is the anchor</p>
    <Tooltip anchor="testIdLeft" position={Position.Left} isOpen>
      This is the content
    </Tooltip>
  </StyledContainer>
);
