import { jsonRenderer, render, screen } from '@/utils/test';
import React from 'react';
import { Tooltip } from '.';
import { Position } from './Tooltip.types';

describe('Tooltip', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Tooltip position={Position.Bottom} isOpen content="Test">
        <button type="button">Test</button>
      </Tooltip>
    );
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(
      <Tooltip position={Position.Bottom} isOpen content="Tooltip content">
        <button type="button">Test</button>
      </Tooltip>
    );
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });
});
