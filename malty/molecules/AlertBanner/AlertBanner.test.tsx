import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AlertBanner } from './AlertBanner';
import { AlertBannerType, AnimatedProps } from './AlertBanner.types';

const actionMockFn = jest.fn();
const dismissButtonMockFn = jest.fn();
const toggleBannerText = jest.fn();
const onActiveAlertChangeMockFn = jest.fn();

const alertsMock = [
  {
    eid: '1',
    type: AlertBannerType.Error,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'First Action',
    dismissible: true,
    onDismiss: dismissButtonMockFn,
    icon: true
  },
  {
    eid: '2',
    type: AlertBannerType.Information,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'Second Action',
    dismissible: true,
    onDismiss: dismissButtonMockFn,
    icon: true
  },
  {
    eid: '3',
    type: AlertBannerType.Warning,
    message: 'Hello, Im the AlertBanner!',
    dataQaId: 'alert-banner',
    action: actionMockFn,
    actionName: 'Third Action',
    dismissible: true,
    onDismiss: dismissButtonMockFn,
    icon: true
  }
];

const animationMock: AnimatedProps = {
  showAnimations: false,
  triggerYPosition: 0,
  isBannerTextCompressed: false,
  toggleBannerTextCompress: toggleBannerText
};

describe('<AlertBanner />', () => {
  beforeEach(() => {
    render(<AlertBanner alerts={alertsMock} animation={animationMock} />);
  });
  it('should render AlertBanner', () => {
    const message = screen.getByText(alertsMock[0].message);
    expect(message).toBeDefined();
  });
  it('should render icon', () => {
    // Improvement: give a custom test id to svg element
    const svg = screen.getAllByTestId('icon-Close');
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

const renderWithAnimation = () => {
  const defaultAnimatedProps = {
    ...animationMock,
    isBannerTextCompressed: true
  };
  global.innerWidth = 600;
  const utils = render(
    <AlertBanner
      alerts={alertsMock}
      animation={{
        ...defaultAnimatedProps,
        ...{
          currentYOffset: 0
        }
      }}
    />
  );
  const rerender = (override: Partial<AnimatedProps>) => {
    utils.rerender(<AlertBanner alerts={alertsMock} animation={{ ...defaultAnimatedProps, ...override }} />);
  };
  return {
    ...utils,
    rerender
  };
};

describe('AlertBanner with animations', () => {
  test('Text is compressed and botton actions is hidden', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    });
    const fadeWrapper = screen.getByTestId('fade-wrapper');
    const pagination = screen.getByTestId('alert-banner-pagination');
    expect(fadeWrapper).toBeDefined();
    expect(pagination).not.toBeVisible();
  });

  test('Text is compressed and the user clicks on Banner', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    });
    const fadeWrapper = screen.getByTestId(/-AlertBanner-content/);
    fireEvent.click(fadeWrapper);
    expect(toggleBannerText).toHaveBeenCalledTimes(1);
  });

  test('Text is not compressed and bottom options is visible', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: false
    });
    const fadeWrapper = screen.getByTestId('fade-wrapper');
    const pagination = screen.getByTestId('alert-banner-pagination');
    expect(fadeWrapper).toBeDefined();
    expect(pagination).toBeVisible();
  });

  test('Text is compressed and bottom options are visible', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    });
    const fadeWrapper = screen.getByTestId('fade-wrapper');
    const pagination = screen.getByTestId('alert-banner-pagination');
    expect(fadeWrapper).toBeDefined();
    expect(pagination).not.toBeVisible();
    rerender({
      isBannerTextCompressed: false
    });
    expect(pagination).toBeVisible();
  });
});

describe('AlertBanner with onActiveAlertChange', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be called when it renders the alert banner', () => {
    render(<AlertBanner alerts={alertsMock} onActiveAlertChange={onActiveAlertChangeMockFn} />);
    expect(onActiveAlertChangeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should be called when the pagination is used', () => {
    render(<AlertBanner alerts={alertsMock} onActiveAlertChange={onActiveAlertChangeMockFn} />);
    const pagination = screen.getByTestId('alert-banner-pagination');
    expect(pagination).toBeVisible();
    const buttonNext = screen.getByTestId('alert-banner-pagination-button-next');
    fireEvent.click(buttonNext);
    expect(onActiveAlertChangeMockFn).toHaveBeenCalledTimes(2);
  });
  it('should be called when dismisses an alert and the active alert change to a different one', () => {
    render(<AlertBanner alerts={alertsMock} onActiveAlertChange={onActiveAlertChangeMockFn} />);
    const dismissButton = screen.getByTestId('alert-banner-close-icon');
    fireEvent.click(dismissButton);
    expect(onActiveAlertChangeMockFn).toHaveBeenCalledTimes(2);
  });
  it('should be called when is not defined', () => {
    render(<AlertBanner alerts={alertsMock} />);
    expect(onActiveAlertChangeMockFn).toHaveBeenCalledTimes(0);
  });
});
