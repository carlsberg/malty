import { fireEvent, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { AlertBanner } from './AlertBanner';
import { AlertBannerType } from './AlertBanner.types';

const actionMockFn = jest.fn();
const dismissButtonMockFn = jest.fn();

const alertsMock = [
  {
    type: AlertBannerType.Error,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'First Action',
    dismiss: dismissButtonMockFn,
    icon: true
  },
  {
    type: AlertBannerType.Information,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'Second Action',
    dismiss: dismissButtonMockFn,
    icon: true
  },
  {
    type: AlertBannerType.Warning,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'Third Action',
    dismiss: dismissButtonMockFn,
    icon: true
  }
];

describe('<AlertBanner />', () => {
  beforeEach(() => {
    render(<AlertBanner alerts={alertsMock} />);
  });
  it('should render AlertBanner', () => {
    const message = screen.getByText(alertsMock[0].message);
    expect(message).toBeDefined();
  });
  it('should render icon', () => {
    // Improvement: give a custom test id to svg element
    const svg = screen.getAllByTestId('svg-component');
    expect(svg[0]).toBeDefined();
  });
  it('should render dismiss button', () => {
    const dismissButton = screen.getByTestId('alert-banner-close-icon');
    fireEvent.click(dismissButton);
    fireEvent.keyUp(dismissButton, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(dismissButtonMockFn).toHaveBeenCalledTimes(2);
  });
  it('should render action text', () => {
    const actionName = screen.getByText(alertsMock[0].actionName);
    fireEvent.click(actionName);
    fireEvent.keyUp(actionName, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(actionMockFn).toHaveBeenCalledTimes(2);
  });
});
