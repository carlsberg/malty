import { fireEvent, jsonRenderer, render, screen, waitForElementToBeRemoved } from '@carlsberggroup/malty.utils.test';
import React, { createRef, RefObject } from 'react';
import { act } from 'react-dom/test-utils';
import { Tooltip } from '.';
import { TooltipPosition, TooltipToggle } from './Tooltip.types';

const anchorAction = jest.fn();
const tooltipAnchorRef: RefObject<HTMLAnchorElement> = createRef();

const renderTooltip = (options = { toggleType: TooltipToggle.Click }) =>
  render(
    <div>
      <a onClick={anchorAction} ref={tooltipAnchorRef}>
        Tooltip Anchor
      </a>
      <Tooltip
        anchorRef={tooltipAnchorRef}
        position={TooltipPosition.BottomCenter}
        dataTestId="tooltip-test"
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
          anchorRef={tooltipAnchorRef}
          position={TooltipPosition.BottomCenter}
          toggle={TooltipToggle.Click}
          autoHideDuration={3000}
        >
          <button type="button">Button inside Tooltip</button>
        </Tooltip>
      </div>
    );
    expect(view).toMatchSnapshot();
  });

  it('should show tooltip once anchor is clicked', () => {
    renderTooltip({ toggleType: TooltipToggle.Click });

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
    renderTooltip({ toggleType: TooltipToggle.Hover });

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
    renderTooltip({ toggleType: TooltipToggle.Event });

    // TooltipToggle.Event - initial state is hidden
    expect(screen.queryByText('Button inside Tooltip')).not.toBeInTheDocument();

    await act(async () => {
      Tooltip.openTooltip(tooltipAnchorRef);
    });
    // should have opened
    const innerButton = screen.getByRole('button', { name: 'Button inside Tooltip' });
    expect(innerButton).toBeInTheDocument();

    await act(async () => {
      Tooltip.closeTooltip(tooltipAnchorRef);
    });
    // should have closed
    expect(innerButton).not.toBeInTheDocument();

    await act(async () => {
      Tooltip.startTooltipTimer(tooltipAnchorRef);
    });
    // should open again
    const newInnerButton = screen.getByRole('button', { name: 'Button inside Tooltip' });
    expect(newInnerButton).toBeInTheDocument();

    // should hide tooltip after 3 seconds
    await waitForElementToBeRemoved(() => screen.queryByText('Button inside Tooltip'), { timeout: 3000 });
  });
});
