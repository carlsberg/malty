import { act, fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Toast } from './Toast';
import { ToastColor } from './Toast.types';

describe('Toast', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Toast message="Toast message" color={ToastColor.Notification} dataQaId="toast" />);
    expect(view).toMatchSnapshot();
  });
  it('should render Toast component with message', () => {
    const dataQaId = 'toast';
    render(<Toast message="Toast message" color={ToastColor.Notification} dataQaId={dataQaId} />);

    expect(screen.getByText('Toast message')).toBeInTheDocument();
    expect(screen.getByTestId(`${dataQaId}-message`)).toBeInTheDocument();
  });

  it('Should call On close action', async () => {
    const dismissMock = jest.fn();
    const dataQaId = 'toast';
    const message = 'Toast with close icon';

    render(
      <Toast
        message={message}
        showCloseIcon
        color={ToastColor.Notification}
        dataQaId={dataQaId}
        onClose={dismissMock}
      />
    );

    expect(screen.getByText(message)).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId(`${dataQaId}-close-icon`));
    });
    expect(dismissMock).toHaveBeenCalledTimes(1);
  });

  it('Should call custom action', async () => {
    const dismissMock = jest.fn();
    render(
      <Toast
        message="Toast message"
        color={ToastColor.Notification}
        onCustomAction={dismissMock}
        customActionText="action"
      />
    );

    expect(screen.getByText('action')).toBeInTheDocument();
  });
});
