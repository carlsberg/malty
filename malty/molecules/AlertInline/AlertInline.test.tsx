import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AlertInline } from './AlertInline';
import { AlertInlineColor } from './AlertInline.types';

describe('alertInline', () => {
  it('should render In Line Alert component with label', () => {
    render(
      <AlertInline
        message="Hello, Im the In Line Alert! Play with me."
        color={AlertInlineColor.Notification}
        dataQaId="inline"
      />
    );
    expect(screen.getByText('Hello, Im the In Line Alert! Play with me.')).toBeInTheDocument();
    expect(screen.getByTestId('inline-alert-container')).toBeInTheDocument();
  });

  it('should render In Line Alert component with label and two actions', () => {
    const secondActionMock = jest.fn();
    render(
      <AlertInline
        message="Hello, Im the In Line Alert! Play with me."
        color={AlertInlineColor.Notification}
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
