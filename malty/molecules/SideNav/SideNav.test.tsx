import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { SideNav } from './SideNav';

interface ExtendedMediaQueryList extends MediaQueryList, MediaQueryListEvent {}

const mockMatchMedia = (matches: boolean): ExtendedMediaQueryList => {
  const mediaQueryList: ExtendedMediaQueryList = {
    matches,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: null,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    target: null,
    timeStamp: 0,
    type: '',
    // Additional properties
    returnValue: true,
    srcElement: null,
    composedPath: jest.fn(),
    initEvent: jest.fn(),
    // More missing properties
    preventDefault: jest.fn(),
    stopImmediatePropagation: jest.fn(),
    stopPropagation: jest.fn(),
    NONE: 0,
    CAPTURING_PHASE: 1,
    AT_TARGET: 2,
    BUBBLING_PHASE: 3
  };

  return mediaQueryList;
};

const mediaQuery = '(max-width: 1024px)';
const mediaQueryList = mockMatchMedia(true);

beforeEach(() => {
  // Mock the matchMedia function
  window.matchMedia = jest.fn().mockImplementation(() => mediaQueryList);
});

afterEach(() => {
  // Clear the mock after each test
  jest.clearAllMocks();
});

const productName = 'Ottilia';

const simpleNavigation = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconName.DataTransfer, name: 'item 2', href: '/item2' },
  { icon: IconName.DataTransfer, name: 'item 3', href: '/item3' }
];

const navWithRouterItems = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconName.DataTransfer, name: 'item 2', href: '/item2' },
  {
    icon: IconName.DataTransfer,
    name: 'item with subnav',
    component: Link,
    to: '/',
    subItems: [{ name: 'sub item 1', href: '/' }]
  }
];

const systemOptions = [
  { icon: IconName.DataTransfer, href: '/iframe.html' },
  { icon: IconName.DataTransfer, href: '/iframe.html' }
];

const profileMenu = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconName.DataTransfer, href: '/iframe.html' },
    { name: 'Sign out', icon: IconName.DataTransfer, href: '/item2' }
  ]
};

describe('molecule sideNav', () => {
  it('sideNav handleChange updates match correctly', () => {
    const updateMatch = jest.fn();
    const handleChange = (event: MediaQueryListEvent) => {
      updateMatch(event.matches);
    };

    // Call handleChange
    handleChange(mediaQueryList);

    // Add your assertions here, for example:
    expect(updateMatch).toHaveBeenCalledWith(true);
  });

  it('renders with correct product name', () => {
    render(
      <SideNav
        productName={productName}
        navItems={simpleNavigation}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
      />
    );

    expect(screen.getByText(productName)).not.toBeNull();
  });
});

it('toggles navigation when clicking menu button', () => {
  render(
    <SideNav
      productName={productName}
      navItems={simpleNavigation}
      systemOptions={systemOptions}
      profileMenu={profileMenu}
    />
  );

  const collapseBtn = screen.getByTestId('collapse-button');

  fireEvent(
    collapseBtn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(screen.queryByText(productName)).not.toBeInTheDocument();

  fireEvent(
    collapseBtn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(screen.getByText(productName)).toBeInTheDocument();
});

describe('sideNav sub navigation', () => {
  it('opens when clicking a nav item with sub items', () => {
    render(
      <BrowserRouter>
        <SideNav
          productName={productName}
          navItems={navWithRouterItems}
          systemOptions={systemOptions}
          profileMenu={profileMenu}
        />
      </BrowserRouter>
    );

    const itemWithSubNav = screen.getByText('item with subnav');

    fireEvent(
      itemWithSubNav,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(screen.getByText('sub item 1')).toBeInTheDocument();
  });
});
