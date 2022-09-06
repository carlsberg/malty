import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AlertBanner } from './AlertBanner';
import { AlertBannerType, AnimatedProps } from './AlertBanner.types';

const actionMockFn = jest.fn();
const dismissButtonMockFn = jest.fn();
const toggleBannerText = jest.fn();

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


const renderWithAnimation = () => {
  const defaultAnimatedProps = {
    ...animationMock,
    isBannerTextCompressed: true
  }
  global.innerWidth = 600;
  const utils = render(<AlertBanner alerts={alertsMock} animation={{ ...defaultAnimatedProps, ...{
    currentYOffset: 0,
   }}} />);
   const rerender = (override: any) => {
  
    utils.rerender(<AlertBanner alerts={alertsMock} animation={{ ...defaultAnimatedProps, ...override}} />)
   }
  return { 
    ...utils,
    rerender
  }
}

describe("AlertBanner with animations", () => {
  test('Text is compressed and botton actions is hidden', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    })
    const fadeWrapper = screen.getByTestId("fade-wrapper");
    const pagination = screen.getByTestId("alert-banner-pagination");
    expect(fadeWrapper).toBeDefined();
    expect(pagination).not.toBeVisible();
  });

  test('Text is compressed and the user clicks on Banner', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    })
    const fadeWrapper = screen.getByTestId(/-AlertBanner-content/);
    fireEvent.click(fadeWrapper)
    expect(toggleBannerText).toHaveBeenCalledTimes(1)
  });
  
  test('Text is not compressed and botton options is visible', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: false
    })
    const fadeWrapper = screen.getByTestId("fade-wrapper");
    const pagination = screen.getByTestId("alert-banner-pagination");
    expect(fadeWrapper).toBeDefined();
    expect(pagination).toBeVisible();
  })

  test('Text is not compressed and botton options is visible', () => {
    const { rerender } = renderWithAnimation();
    rerender({
      isBannerTextCompressed: true
    });
    const fadeWrapper = screen.getByTestId("fade-wrapper");
    const pagination = screen.getByTestId("alert-banner-pagination");
    expect(fadeWrapper).toBeDefined();
    expect(pagination).not.toBeVisible();
    rerender({
      isBannerTextCompressed: false
    });
    expect(pagination).toBeVisible();
  })
})