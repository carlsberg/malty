import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Tooltip } from '.';
import { Position, Toggle } from './Tooltip.types';

describe('Tooltip', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <>
        <a id="testId" onClick={() => null}>
          Click here to toggle it!
        </a>
        <Tooltip anchor="testId" position={Position.Bottom} isOpen toggle={Toggle.Click}>
          <button type="button">Test</button>
        </Tooltip>
      </>
    );
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(
      <>
        <a id="testId" onClick={() => null}>
          Click here to toggle it!
        </a>
        <Tooltip anchor="testId" position={Position.Bottom} isOpen toggle={Toggle.Click}>
          <button type="button">Test</button>
        </Tooltip>
      </>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
