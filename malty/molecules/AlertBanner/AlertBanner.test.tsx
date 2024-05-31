import { render } from '@carlsberggbs/malty.utils.test';
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
  it('should render AlertBanner', () => {
    render(<AlertBanner alerts={alertsMock} animation={animationMock} />);

    const message = screen.getByText(alertsMock[0].message);

    expect(message).toBeDefined();
  });

  it('should render icon', () => {
    render(<AlertBanner alerts={alertsMock} animation={animationMock} />);

    const svg = screen.getByTestId('alert-banner-close-icon');

    expect(svg).toBeVisible();
  });

  it('should render dismiss button', () => {
    render(<AlertBanner alerts={alertsMock} animation={animationMock} />);

    const dismissButton = screen.getByTestId('alert-banner-close-icon');

    fireEvent.click(dismissButton);
    fireEvent.keyUp(dismissButton, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(dismissButtonMockFn).toHaveBeenCalledTimes(2);
  });

  it('should render action text', () => {
    render(<AlertBanner alerts={alertsMock} animation={animationMock} />);

    const actionName = screen.getByText(alertsMock[0].actionName);

    fireEvent.click(actionName);
    fireEvent.keyUp(actionName, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(actionMockFn).toHaveBeenCalledTimes(2);
  });

  it('should not render pagination when only exists one alert', () => {
    const alertsNewMock = [
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
      }
    ];

    render(<AlertBanner alerts={alertsNewMock} animation={animationMock} />);

    const pagination = screen.queryByTestId('alert-banner-pagination');

    expect(pagination).not.toBeInTheDocument();
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
  it('should have Text compressed and bottom actions as hidden', () => {
    const { rerender } = renderWithAnimation();

    rerender({
      isBannerTextCompressed: true
    });

    const fadeWrapper = screen.getByTestId('fade-wrapper');
    const pagination = screen.getByTestId('alert-banner-pagination');

    expect(fadeWrapper).toBeDefined();
    expect(pagination).not.toBeVisible();
  });

  it('should have Text compressed and user should click on Banner', () => {
    const { rerender } = renderWithAnimation();

    rerender({
      isBannerTextCompressed: true
    });

    const fadeWrapper = screen.getByTestId(/-AlertBanner-content/);

    fireEvent.click(fadeWrapper);

    expect(toggleBannerText).toHaveBeenCalledTimes(1);
  });

  it('should have Text not compressed and bottom options visible', () => {
    const { rerender } = renderWithAnimation();

    rerender({
      isBannerTextCompressed: false
    });

    const fadeWrapper = screen.getByTestId('fade-wrapper');
    const pagination = screen.getByTestId('alert-banner-pagination');

    expect(fadeWrapper).toBeDefined();
    expect(pagination).toBeVisible();
  });

  it('should have Text compressed and bottom options visible', () => {
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

  it('should not be called when is not defined', () => {
    render(<AlertBanner alerts={alertsMock} />);

    expect(onActiveAlertChangeMockFn).toHaveBeenCalledTimes(0);
  });
});
