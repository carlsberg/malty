import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Tooltip } from '.';
import { TooltipPosition, TooltipToggle } from './Tooltip.types';

describe('Tooltip', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <>
        <a id="testId" onClick={() => null}>
          Click here to toggle it!
        </a>
        <Tooltip anchor="testId" position={TooltipPosition.Bottom} isOpen toggle={TooltipToggle.Click}>
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
        <Tooltip anchor="testId" position={TooltipPosition.Bottom} isOpen toggle={TooltipToggle.Click}>
          <button type="button">Test</button>
        </Tooltip>
      </>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
