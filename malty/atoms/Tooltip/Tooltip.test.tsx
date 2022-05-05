import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { act, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { Tooltip } from '.';
import { TooltipPlacement, TooltipToggle } from './Tooltip.types';

const anchorAction = jest.fn();
const onClose = jest.fn();

const renderTooltip = (options = { toggleType: TooltipToggle.Click }) =>
  render(
    <Tooltip
      tooltipId="tooltip"
      triggerComponent={(setTriggerElement) => (
        <a onClick={anchorAction} ref={setTriggerElement}>
          Tooltip Anchor
        </a>
      )}
      placement={TooltipPlacement.Top}
      dataTestId="tooltip-test"
      toggle={options.toggleType}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <button type="button">Button inside Tooltip</button>
    </Tooltip>
  );

describe('Tooltip', () => {
  it('should matches snapshot', () => {
    const view = jsonRenderer(
      <Tooltip
        tooltipId="tooltip"
        triggerComponent={(setTriggerElement) => (
          <a onClick={anchorAction} ref={setTriggerElement}>
            Tooltip Anchor
          </a>
        )}
        placement={TooltipPlacement.Bottom}
        dataTestId="tooltip-test"
        toggle={TooltipToggle.Click}
        autoHideDuration={3000}
        onClose={onClose}
      >
        <button type="button">Button inside Tooltip</button>
      </Tooltip>
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
      Tooltip.openTooltip('tooltip');
    });
    // should have opened
    const innerButton = screen.getByRole('button', { name: 'Button inside Tooltip' });
    expect(innerButton).toBeInTheDocument();

    await act(async () => {
      Tooltip.closeTooltip('tooltip');
    });
    // should have closed
    expect(innerButton).not.toBeInTheDocument();

    await act(async () => {
      Tooltip.startTooltipTimer('tooltip');
    });
    // should open again
    const newInnerButton = screen.getByRole('button', { name: 'Button inside Tooltip' });
    expect(newInnerButton).toBeInTheDocument();

    // should hide tooltip after 3 seconds
    await waitForElementToBeRemoved(() => screen.queryByText('Button inside Tooltip'), { timeout: 3000 });
    expect(onClose).toHaveBeenCalled();
  });
});
