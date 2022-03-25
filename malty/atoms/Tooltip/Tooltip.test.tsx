import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React, { createRef, RefObject } from 'react';
import { Tooltip } from '.';
import { TooltipPosition, TooltipToggle } from './Tooltip.types';

const anchorAction = jest.fn();
const tooltipAnchorRef: RefObject<HTMLAnchorElement> = createRef();

const renderTooltip = (options = { toggleType: TooltipToggle.Persist, isOpen: true }) =>
  render(
    <div>
      <a onClick={anchorAction} ref={tooltipAnchorRef}>
        Tooltip Anchor
      </a>
      <Tooltip
        anchor={tooltipAnchorRef}
        position={TooltipPosition.BottomCenter}
        dataQaId="tooltip-test"
        isOpen={options.isOpen}
        toggle={options.toggleType}
        autoHideDuration={3000}
      >
        <button type="button">Button inside Tooltip</button>
      </Tooltip>
    </div>
  );

describe('Tooltip', () => {
  it('should matches snapshot', () => {
    const view = jsonRenderer(
      <div>
        <a onClick={anchorAction} ref={tooltipAnchorRef}>
          Tooltip Anchor
        </a>
        <Tooltip
          anchor={tooltipAnchorRef}
          position={TooltipPosition.BottomCenter}
          isOpen
          toggle={TooltipToggle.Persist}
          autoHideDuration={3000}
        >
          <button type="button">Button inside Tooltip</button>
        </Tooltip>
      </div>
    );
    expect(view).toMatchSnapshot();
  });

  it('should renders elements inside tooltip', () => {
    renderTooltip();
    expect(screen.getByRole('button', { name: 'Button inside Tooltip' })).toBeInTheDocument();
  });

  it('should show tooltip once anchor is clicked', () => {
    renderTooltip({ toggleType: TooltipToggle.Click, isOpen: false });

    // TooltipToggle.Click - initial state is hidden
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();

    // show tooltip
    fireEvent.click(screen.getByText('Tooltip Anchor'));
    expect(anchorAction).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Button inside Tooltip' })).toBeInTheDocument();

    // hide tooltip
    fireEvent.click(screen.getByText('Tooltip Anchor'));
    expect(anchorAction).toHaveBeenCalled();
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();
  });

  it('should show tooltip once anchor is hovered', () => {
    renderTooltip({ toggleType: TooltipToggle.Hover, isOpen: false });

    // TooltipToggle.Hover - initial state is hidden
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();

    // show tooltip
    fireEvent.mouseEnter(screen.getByText('Tooltip Anchor'));
    expect(anchorAction).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Button inside Tooltip' })).toBeInTheDocument();

    // hide tooltip
    fireEvent.mouseLeave(screen.getByText('Tooltip Anchor'));
    expect(anchorAction).toHaveBeenCalled();
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();
  });

  it('should hide tooltip after finish autoHideDuration', async () => {
    renderTooltip({ toggleType: TooltipToggle.Event, isOpen: false });

    // TooltipToggle.Event - initial state is visible
    expect(screen.getByRole('button', { name: 'Button inside Tooltip' })).toBeInTheDocument();

    // set autoHideDuration of 3 seconds
    await new Promise((r) => setTimeout(r, 3000));
    // hide tooltip after 3 seconds
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();
  });
});
