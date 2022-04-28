import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { InlineAlert } from './InlineAlert';
import { InlineAlertColor } from './InlineAlert.types';

describe('InlineAlert', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <InlineAlert
        message="Hello, Im the In Line Alert! Play with me."
        color={InlineAlertColor.Notification}
        dataQaId="inline"
      />
    );
    expect(view).toMatchSnapshot();
  });
  it('should render In Line Alert component with label', () => {
    render(
      <InlineAlert
        message="Hello, Im the In Line Alert! Play with me."
        color={InlineAlertColor.Notification}
        dataQaId="inline"
      />
    );
    expect(screen.getByText('Hello, Im the In Line Alert! Play with me.')).toBeInTheDocument();
    expect(screen.getByTestId('inline-alert-container')).toBeInTheDocument();
  });

  it('should render In Line Alert component with label and two actions', () => {
    const secondActionMock = jest.fn();
    render(
      <InlineAlert
        message="Hello, Im the In Line Alert! Play with me."
        color={InlineAlertColor.Notification}
        dataQaId="inline-alert-with-icon-and-actions"
        firstActionText="ok"
        secondActionText="cancel"
        secondAction={secondActionMock}
      />
    );

    expect(screen.getByText('ok')).toBeInTheDocument();
    expect(screen.getByText('cancel')).toBeInTheDocument();
    expect(screen.getByText('Hello, Im the In Line Alert! Play with me.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('cancel'));
    expect(secondActionMock).toHaveBeenCalledTimes(1);
  });
});
