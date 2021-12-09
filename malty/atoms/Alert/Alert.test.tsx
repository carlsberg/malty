import { fireEvent, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Alert } from './Alert';
import { AlertBackgroundColor, AlertType } from './Alert.types';

describe('<Alert/>', () => {
  it('should render the In Line Alert component with label', () => {
    render(
      <Alert
        type={AlertType.InLine}
        label="In Line Alert Label"
        color={AlertBackgroundColor.Notification}
        dataQaId="inline-alert"
      />
    );
    expect(screen.getAllByText('In Line Alert Label')).toBeInTheDocument();
    // expect(screen.getByTestId('inline-alert')).toBeInTheDocument();
  });

  it('should render the In Line Alert component with label and Icon', () => {
    render(
      <Alert
        type={AlertType.InLine}
        label="In Line Alert Label and Icon"
        icon
        color={AlertBackgroundColor.Notification}
        dataQaId="inline-alert-with-icon"
      />
    );
    expect(screen.getAllByText('In Line Alert Label and Icon')).toBeInTheDocument();
    // todo find test icon
    // expect(screen.getByTestId('inline-alert')).toBeInTheDocument();
  });

  it('should render the In Line Alert component with label, Icon and two actions', () => {
    const secondActionMock = jest.fn();
    render(
      <Alert
        type={AlertType.InLine}
        label="In Line Alert with Label, Icon and two actions"
        icon
        color={AlertBackgroundColor.Notification}
        dataQaId="inline-alert-with-icon-and-actions"
        firstActionText="ok"
        secondActionText="cancel"
        secondAction={secondActionMock}
      />
    );

    expect(screen.getByText('ok')).toBeInTheDocument();
    expect(screen.getByText('cancel')).toBeInTheDocument();
    expect(screen.getAllByText('In Line Alert with Label, Icon and two actions')).toBeInTheDocument();
    fireEvent.click(screen.getByText('cancel'));
    expect(secondActionMock).toHaveBeenCalledTimes(1);
  });

  // it('should render the Banner Alert component with Icon, action type, second action and dismiss button', () => {
  //   const toggleMock = jest.fn();
  //   const secondActionMock = jest.fn();
  //   render(
  //     <Alert
  //       type={AlertType.Banner}
  //       label="Alert Label"
  //       alertId="bannerAlertId"
  //       icon
  //       color={AlertBackgroundColor.Notification}
  //       dataQaId="banner-alert"
  //       firstActionText="ok"
  //       secondActionText="cancel"
  //       secondAction={secondActionMock}
  //       dismiss={toggleMock}
  //     />
  //   );

  //   expect(screen.getByText('ok')).toBeInTheDocument();
  //   expect(screen.getByText('cancel')).toBeInTheDocument();
  //   expect(screen.getByText('Alert Label')).toBeInTheDocument();

  //   const dismissButton = screen.getByTestId('alert-close-icon');
  //   expect(dismissButton).toBeInTheDocument();
  //   fireEvent.click(dismissButton);
  //   expect(toggleMock).toHaveBeenCalledTimes(1);

  //   fireEvent.click(screen.getByText('cancel'));
  //   expect(secondActionMock).toHaveBeenCalledTimes(1);
  // });

  // it('should render the alert component with simple type', () => {
  //   render(
  //     <Alert type={ALERT_TYPE.SIMPLE} variant={ALERT_VARIANT.SUCCESS} dataQaId="alert">
  //       <span>Alert</span>
  //     </Alert>
  //   );
  //   const alert = screen.getByTestId('alert');
  //   expect(alert).toBeInTheDocument();
  //   expect(alert).toHaveClass('success');

  //   expect(screen.queryByText('ok')).not.toBeInTheDocument();
  //   expect(screen.queryByText('cancel')).not.toBeInTheDocument();
  //   expect(screen.getByTestId('close-icon')).toBeInTheDocument();
  // });

  // it('should render the alert component with SNACKBAR type', () => {
  //   render(
  //     <Alert type={ALERT_TYPE.SNACKBAR} variant={ALERT_VARIANT.WARNING} dataQaId="alert">
  //       <span>Alert</span>
  //     </Alert>
  //   );
  //   const alert = screen.getByTestId('alert');
  //   expect(alert).toHaveClass('warning');

  //   expect(screen.queryByText('ok')).not.toBeInTheDocument();
  //   expect(screen.queryByText('cancel')).not.toBeInTheDocument();
  //   expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
  // });

  // it('should render the alert with default type and variant', () => {
  //   render(
  //     <Alert dataQaId="alert">
  //       <span>Alert</span>
  //     </Alert>
  //   );
  //   const alert = screen.getByTestId('alert');
  //   expect(alert).toHaveClass('error');
  // });
});
