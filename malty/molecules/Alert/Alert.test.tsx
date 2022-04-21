import { fireEvent, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Alert } from './Alert';
import { AlertColor } from './Alert.types';

describe('Alert', () => {
  describe('In Line Alert', () => {
    it('should render In Line Alert component with label', () => {
      render(
        <Alert message="Hello, Im the In Line Alert! Play with me." color={AlertColor.Notification} dataQaId="inline" />
      );
      expect(screen.getByText('In Line Alert Label')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-container')).toBeInTheDocument();
    });

    it('should render In Line Alert component with label and Icon', () => {
      render(
        <Alert
          message="Hello, Im the In Line Alert! Play with me."
          color={AlertColor.Notification}
          dataQaId="inline-alert-with-icon"
        />
      );

      expect(screen.getByText('In Line Alert Label and Icon')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-with-icon-alert-content')).toBeInTheDocument();
      expect(screen.getByTestId('svg-component')).toBeInTheDocument();
    });

    it('should render In Line Alert component with label, Icon and two actions', () => {
      const secondActionMock = jest.fn();
      render(
        <Alert
          message="Hello, Im the In Line Alert! Play with me."
          color={AlertColor.Notification}
          dataQaId="inline-alert-with-icon-and-actions"
          firstActionText="ok"
          secondActionText="cancel"
          secondAction={secondActionMock}
        />
      );

      expect(screen.getByText('ok')).toBeInTheDocument();
      expect(screen.getByText('cancel')).toBeInTheDocument();
      expect(screen.getByTestId('inline-alert-with-icon-and-actions-alert-content')).toBeInTheDocument();
      expect(screen.getByText('In Line Alert with Label, Icon and two actions')).toBeInTheDocument();
      fireEvent.click(screen.getByText('cancel'));
      expect(secondActionMock).toHaveBeenCalledTimes(1);
    });
  });
});
