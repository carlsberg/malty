// TODO: ? No need to be worried about these dependencies here, they have been added as dev dependencies
import AddContent from '@carlsberggroup/malty.icons.add-content';
import AddEvent from '@carlsberggroup/malty.icons.add-event';
import AddProject from '@carlsberggroup/malty.icons.add-project';
import AddedDocument from '@carlsberggroup/malty.icons.added-document';
import Alert from '@carlsberggroup/malty.icons.alert';
import AlertConnection from '@carlsberggroup/malty.icons.alert-connection';
import AppDropBox from '@carlsberggroup/malty.icons.app-dropbox';
import AppFacebook from '@carlsberggroup/malty.icons.app-facebook';
import AppGithub from '@carlsberggroup/malty.icons.app-github';
import AppInstagram from '@carlsberggroup/malty.icons.app-instagram';
import AppLinkedin from '@carlsberggroup/malty.icons.app-linkedin';
import AppPowerbi from '@carlsberggroup/malty.icons.app-powerbi';
import AppSkype from '@carlsberggroup/malty.icons.app-skype';
import Arrange from '@carlsberggroup/malty.icons.arrange';
import ArrowSmallDown from '@carlsberggroup/malty.icons.arrow-small-down';
import ArrowSmallLeft from '@carlsberggroup/malty.icons.arrow-small-left';
import ArrowSmallRight from '@carlsberggroup/malty.icons.arrow-small-right';
import ArrowSmallUp from '@carlsberggroup/malty.icons.arrow-small-up';
import At from '@carlsberggroup/malty.icons.at';
import Attachment from '@carlsberggroup/malty.icons.attachment';
import Balance from '@carlsberggroup/malty.icons.balance';
import Bell from '@carlsberggroup/malty.icons.bell';
import BellNotification from '@carlsberggroup/malty.icons.bell-notification';
import Bold from '@carlsberggroup/malty.icons.bold';
import Book from '@carlsberggroup/malty.icons.book';
import Bookmark from '@carlsberggroup/malty.icons.bookmark';
import BookmarkFilled from '@carlsberggroup/malty.icons.bookmark-filled';
import Bottle from '@carlsberggroup/malty.icons.bottle';
import BottleCraft from '@carlsberggroup/malty.icons.bottle-craft';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import CalendarAutumn from '@carlsberggroup/malty.icons.calendar-autumn';
import CalendarConfirm from '@carlsberggroup/malty.icons.calendar-confirm';
import CalendarEvents from '@carlsberggroup/malty.icons.calendar-events';
import CalendarSpring from '@carlsberggroup/malty.icons.calendar-spring';
import CalendarSummer from '@carlsberggroup/malty.icons.calendar-summer';
import CalendarWholeYear from '@carlsberggroup/malty.icons.calendar-whole-year';
import CalendarWinter from '@carlsberggroup/malty.icons.calendar-winter';
import Camera from '@carlsberggroup/malty.icons.camera';
import Can from '@carlsberggroup/malty.icons.can';
import Card from '@carlsberggroup/malty.icons.card';
import CardPlus from '@carlsberggroup/malty.icons.card-plus';
import CarlsbergFilled from '@carlsberggroup/malty.icons.carlsberg-filled';
import CarlsbergOutlined from '@carlsberggroup/malty.icons.carlsberg-outlined';
import CarretDown from '@carlsberggroup/malty.icons.carret-down';
import CarretLeft from '@carlsberggroup/malty.icons.carret-left';
import CarretMove from '@carlsberggroup/malty.icons.carret-move';
import CarretRight from '@carlsberggroup/malty.icons.carret-right';
import CarretUp from '@carlsberggroup/malty.icons.carret-up';
import Cart from '@carlsberggroup/malty.icons.cart';
import CartAdded from '@carlsberggroup/malty.icons.cart-added';
import CartLabel from '@carlsberggroup/malty.icons.cart-label';
import CartNotification from '@carlsberggroup/malty.icons.cart-notification';
import Change from '@carlsberggroup/malty.icons.change';
import Check from '@carlsberggroup/malty.icons.check';
import CheckboxCheck from '@carlsberggroup/malty.icons.checkbox-check';
import CheckboxCheckAlternate from '@carlsberggroup/malty.icons.checkbox-check-alternate';
import CheckboxCheckOutline from '@carlsberggroup/malty.icons.checkbox-check-outline';
import CheckboxCheckSquare from '@carlsberggroup/malty.icons.checkbox-check-square';
import CheckboxEmpty from '@carlsberggroup/malty.icons.checkbox-empty';
import ChevronDown from '@carlsberggroup/malty.icons.chevron-down';
import ChevronLeft from '@carlsberggroup/malty.icons.chevron-left';
import ChevronRight from '@carlsberggroup/malty.icons.chevron-right';
import ChevronUp from '@carlsberggroup/malty.icons.chevron-up';
import Clock from '@carlsberggroup/malty.icons.clock';
import ClockFilled from '@carlsberggroup/malty.icons.clock-filled';
import Clone from '@carlsberggroup/malty.icons.clone';
import Close from '@carlsberggroup/malty.icons.close';
import CoinDollar from '@carlsberggroup/malty.icons.coin-dollar';
import CoinEuro from '@carlsberggroup/malty.icons.coin-euro';
import Compass from '@carlsberggroup/malty.icons.compass';
import CompassFilled from '@carlsberggroup/malty.icons.compass-filled';
import Connected from '@carlsberggroup/malty.icons.connected';
import Contract from '@carlsberggroup/malty.icons.contract';
import Cookies from '@carlsberggroup/malty.icons.cookies';
import Coupon from '@carlsberggroup/malty.icons.coupon';
import Customer from '@carlsberggroup/malty.icons.customer';
import CustomerAdd from '@carlsberggroup/malty.icons.customer-add';
import CustomerQuestion from '@carlsberggroup/malty.icons.customer-question';
import Customers from '@carlsberggroup/malty.icons.customers';

import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, FC, useState } from 'react';
import {
  StyledCopiedText,
  StyledIconList,
  StyledIconWrapper,
  StyledName,
  StyledSearch
} from './AllIconsStories.styled';
import { BaseIconProps, IconColor, IconSize } from './BaseIcon.types';

const allIcons = [
  AddContent,
  AddEvent,
  AddProject,
  AddedDocument,
  Alert,
  AlertConnection,
  AppDropBox,
  AppFacebook,
  AppGithub,
  AppInstagram,
  AppLinkedin,
  AppPowerbi,
  AppSkype,
  Arrange,
  ArrowSmallDown,
  ArrowSmallLeft,
  ArrowSmallRight,
  ArrowSmallUp,
  At,
  Attachment,
  Balance,
  Bell,
  BellNotification,
  Bold,
  Book,
  Bookmark,
  BookmarkFilled,
  Bottle,
  BottleCraft,
  Calendar,
  CalendarAutumn,
  CalendarConfirm,
  CalendarEvents,
  CalendarSpring,
  CalendarSummer,
  CalendarWholeYear,
  CalendarWinter,
  Camera,
  Can,
  Card,
  CardPlus,
  CarlsbergFilled,
  CarlsbergOutlined,
  CarretDown,
  CarretLeft,
  CarretMove,
  CarretRight,
  CarretUp,
  Cart,
  CartAdded,
  CartLabel,
  CartNotification,
  Change,
  Check,
  CheckboxCheck,
  CheckboxCheckAlternate,
  CheckboxCheckOutline,
  CheckboxCheckSquare,
  CheckboxEmpty,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  ClockFilled,
  Clone,
  Close,
  CoinDollar,
  CoinEuro,
  Compass,
  CompassFilled,
  Connected,
  Contract,
  Cookies,
  Coupon,
  Customer,
  CustomerAdd,
  CustomerQuestion,
  Customers
];

const meta: Meta<BaseIconProps> = {
  // TODO: remove "2" once the deprecetion is over
  title: 'Icons/All Icons 2',
  parameters: {
    importObject: 'IconName',
    importPath: '@carlsberggroup/malty.icons.[icon-name]'
  },
  argTypes: {
    color: {
      description: 'Icon color, options are',
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor)
      },
      table: {
        defaultValue: {
          summary: 'IconColor.DigitalBlack'
        }
      },
      defaultValue: 'DigitalBlack'
    },
    size: {
      description: 'Icon size, options are',
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'radio',
        label: Object.values(IconSize)
      },
      table: {
        defaultValue: {
          summary: 'IconSize.Medium'
        }
      },
      defaultValue: 'Medium'
    },
    viewBox: {
      table: {
        disable: true
      }
    },
    dataTestId: {
      control: 'text'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<BaseIconProps>;

export const Base: Story = {
  render: (args) => <CarlsbergFilled {...args} />
};

const SearchIcons = (args: BaseIconProps) => {
  const [icons, setIcons] = useState(allIcons);
  const [tooltipVisible, setTooltipVisible] = useState<string>();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredIcons = allIcons.filter((icon) => icon.name.toLowerCase().includes(value));

    setIcons(filteredIcons);
  };

  const handleClipboard = (iconName: string) => {
    const kebabCase = iconName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const importPath = `import { ${iconName} } from '@carlsberggroup/malty.icons.${kebabCase}';`;

    navigator.clipboard.writeText(importPath);

    setTooltipVisible(iconName);

    setTimeout(() => {
      setTooltipVisible(undefined);
    }, 500);
  };

  return (
    <>
      <StyledSearch
        type="search"
        name="search"
        placeholder="Search icons..."
        autoComplete="off"
        onChange={handleSearch}
      />
      <StyledIconList>
        {icons.map((icon) => {
          const Icon = icon as FC<BaseIconProps>;

          return (
            <StyledIconWrapper key={icon.name} onClick={() => handleClipboard(icon.name)}>
              {tooltipVisible === icon.name ? (
                <StyledCopiedText>Copied!</StyledCopiedText>
              ) : (
                <>
                  <Icon {...args} />
                  <StyledName>{icon.name}</StyledName>
                </>
              )}
            </StyledIconWrapper>
          );
        })}
      </StyledIconList>
    </>
  );
};

export const AllIcons: Story = {
  render: (args) => <SearchIcons {...args} />
};

export default meta;
