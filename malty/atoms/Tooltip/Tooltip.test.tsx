import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tooltip } from '.';
import { Position } from './Tooltip.types';

describe('Tooltip', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Tooltip position={Position.Bottom} isOpen content="Test">
          <button type="button">Test</button>
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
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
