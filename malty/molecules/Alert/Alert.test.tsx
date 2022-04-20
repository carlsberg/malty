import { fireEvent, render, screen, waitFor } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Alert } from './Alert';
import { AlertColor, AlertType } from './Alert.types';

describe('<Alert/>', () => {
  describe('In Line Alert', () => {
    it('should render In Line Alert component with label', () => {
      render(
        <Alert type={AlertType.InLine} color={AlertColor.Notification} dataQaId="inline">
          In Line Alert Label
        </Alert>
      );
      expect(screen.getByText('In Line Alert Label')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-container')).toBeInTheDocument();
    });

    it('should render In Line Alert component with label and Icon', () => {
      render(
        <Alert type={AlertType.InLine} icon color={AlertColor.Notification} dataQaId="inline-alert-with-icon">
          In Line Alert Label and Icon
        </Alert>
      );

      expect(screen.getByText('In Line Alert Label and Icon')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-with-icon-alert-content')).toBeInTheDocument();
      expect(screen.getByTestId('svg-component')).toBeInTheDocument();
    });

    it('should render In Line Alert component with label, Icon and two actions', () => {
      const secondActionMock = jest.fn();
      render(
        <Alert
          type={AlertType.InLine}
          icon
          color={AlertColor.Notification}
          dataQaId="inline-alert-with-icon-and-actions"
          firstActionText="ok"
          secondActionText="cancel"
          secondAction={secondActionMock}
        >
          In Line Alert with Label, Icon and two actions
        </Alert>
      );

      expect(screen.getByText('ok')).toBeInTheDocument();
      expect(screen.getByText('cancel')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-with-icon-and-actions-alert-content')).toBeInTheDocument();
      expect(screen.getByText('In Line Alert with Label, Icon and two actions')).toBeInTheDocument();
      fireEvent.click(screen.getByText('cancel'));
      expect(secondActionMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Toast', () => {
    it('should render Toast Alert component with label', () => {
      const dataQaId = 'toast';
      render(
        <Alert type={AlertType.Toast} color={AlertColor.Notification} dataQaId={dataQaId}>
          Toast Alert Label
        </Alert>
      );

      expect(screen.getByText('Toast Alert Label')).toBeInTheDocument();
      expect(screen.getByTestId(`${dataQaId}-alert-content`)).toBeInTheDocument();
    });

    it('Should hide the toast On Dismiss action', () => {
      const dismissMock = jest.fn();
      const dataQaId = 'toast-dismiss-actions';
      render(
        <Alert type={AlertType.Toast} color={AlertColor.Notification} dataQaId={dataQaId} dismiss={dismissMock}>
          Toast with dismiss action
        </Alert>
      );

      expect(screen.getByText('Toast with dismiss action')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId(`${dataQaId}-close-icon`));
      expect(dismissMock).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Toast with dismiss action')).not.toBeInTheDocument();
    });

    it('Should hide the toast On time out', async () => {
      const dismissMock = jest.fn();
      render(
        <Alert type={AlertType.Toast} color={AlertColor.Notification} dismiss={dismissMock} autoHideDuration={1000}>
          Toast with dismiss action
        </Alert>
      );

      expect(screen.getByText('Toast with dismiss action')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByText('Toast with dismiss action')).not.toBeInTheDocument();
      });
    });
  });
});
