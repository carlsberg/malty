import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { MouseEventHandler } from 'react';

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  color: IconColor;
  size: IconSize;
  viewBox?: string;
  onClick?: MouseEventHandler<SVGElement>;
  name?: IconName;
}

export enum IconName {
  AddContent = 'AddContent',
  AddEvent = 'AddEvent',
  AlertConnection = 'AlertConnection',
  AddedDocument = 'AddedDocument',
  Alert = 'Alert',
  AppDropbox = 'AppDropbox',
  AppFacebook = 'AppFacebook',
  AppGithub = 'AppGithub',
  AppInstagram = 'AppInstagram',
  AppLinkedin = 'AppLinkedin',
  AppPowerbi = 'AppPowerbi',
  AppSkype = 'AppSkype',
  Arrange = 'Arrange',
  ArrowSmallDown = 'ArrowSmallDown',
  ArrowSmallLeft = 'ArrowSmallLeft',
  ArrowSmallRight = 'ArrowSmallRight',
  ArrowSmallUp = 'ArrowSmallUp',
  At = 'At',
  Attachment = 'Attachment',
  Badge = 'Badge',
  Balance = 'Balance',
  BellNotification = 'BellNotification',
  Bell = 'Bell',
  Bold = 'Bold',
  Book = 'Book',
  BookmarkFilled = 'BookmarkFilled',
  Bookmark = 'Bookmark',
  BottleCraft = 'BottleCraft',
  Bottle = 'Bottle',
  CalendarAutumn = 'CalendarAutumn',
  CalendarConfirm = 'CalendarConfirm',
  CalendarEvents = 'CalendarEvents',
  CalendarSpring = 'CalendarSpring',
  CalendarSummer = 'CalendarSummer',
  CalendarWholeYear = 'CalendarWholeYear',
  CalendarWinter = 'CalendarWinter',
  Calendar = 'Calendar',
  Camera = 'Camera',
  Can = 'Can',
  CardPlus = 'CardPlus',
  Card = 'Card',
  CarlsbergFilled = 'CarlsbergFilled',
  CarlsbergOutlined = 'CarlsbergOutlined',
  CarretDown = 'CarretDown',
  CarretLeft = 'CarretLeft',
  CarretMove = 'CarretMove',
  CarretRight = 'CarretRight',
  CarretUp = 'CarretUp',
  CartAdded = 'CartAdded',
  CartLabel = 'CartLabel',
  CartNotification = 'CartNotification',
  Cart = 'Cart',
  Change = 'Change',
  Check = 'Check',
  CheckboxEmpty = 'CheckboxEmpty',
  CheckboxCheckAlternate = 'CheckboxCheckAlternate',
  CheckboxCheckSquare = 'CheckboxCheckSquare',
  CheckboxCheck = 'CheckboxCheck',
  ChevronDown = 'ChevronDown',
  ChevronLeft = 'ChevronLeft',
  ChevronRight = 'ChevronRight',
  ChevronUp = 'ChevronUp',
  ClockFilled = 'ClockFilled',
  Clock = 'Clock',
  Clone = 'Clone',
  Close = 'Close',
  CoinDollar = 'CoinDollar',
  CoinEuro = 'CoinEuro',
  CompassFilled = 'CompassFilled',
  Compass = 'Compass',
  Connected = 'Connected',
  Contract = 'Contract',
  Cookies = 'Cookies',
  Coupon = 'Coupon',
  CustomerAdd = 'CustomerAdd',
  CustomerQuestion = 'CustomerQuestion',
  Customer = 'Customer',
  Customers = 'Customers',
  DataTransfer = 'DataTransfer',
  DiagonalDownLeft = 'DiagonalDownLeft',
  DiagonalDownRight = 'DiagonalDownRight',
  DiagonalUpLeft = 'DiagonalUpLeft',
  DiagonalUpRight = 'DiagonalUpRight',
  Diploma2 = 'Diploma2',
  Diploma = 'Diploma',
  Download = 'Download',
  Draughtmaster = 'Draughtmaster',
  Edit = 'Edit',
  Email = 'Email',
  Expand = 'Expand',
  EyeShow = 'EyeShow',
  EyeHide = 'EyeHide',
  File = 'File',
  FilesCsv = 'FilesCsv',
  FilesJson = 'FilesJson',
  FilesPdf = 'FilesPdf',
  FilesXls = 'FilesXls',
  Filters = 'Filters',
  Flash = 'Flash',
  GlassGoblet = 'GlassGoblet',
  GlassMug = 'GlassMug',
  GlassWeissbier = 'GlassWeissbier',
  Globe = 'Globe',
  Headline = 'Headline',
  HeartFilled = 'HeartFilled',
  Heart = 'Heart',
  Help = 'Help',
  HideMenu = 'HideMenu',
  History = 'History',
  Home = 'Home',
  Hop = 'Hop',
  Image = 'Image',
  Information = 'Information',
  Italic = 'Italic',
  ItemAdd = 'ItemAdd',
  ItemCheckFilled = 'ItemCheckFilled',
  ItemCheckDefault = 'ItemCheckDefault',
  ItemCheck = 'ItemCheck',
  ItemCloseFilled = 'ItemCloseFilled',
  ItemClose = 'ItemClose',
  Library = 'Library',
  Loading = 'Loading',
  LocationIp = 'LocationIp',
  LockOpen = 'LockOpen',
  Lock = 'Lock',
  Map = 'Map',
  Market = 'Market',
  MediaPause = 'MediaPause',
  MediaPlay = 'MediaPlay',
  MediaSoundOff = 'MediaSoundOff',
  MediaSound = 'MediaSound',
  MediaStop = 'MediaStop',
  MenuLeft = 'MenuLeft',
  MenuRight = 'MenuRight',
  Menu = 'Menu',
  Minus = 'Minus',
  Mobile = 'Mobile',
  More = 'More',
  Mouse = 'Mouse',
  Notepad = 'Notepad',
  OutletPlus = 'OutletPlus',
  Outlet = 'Outlet',
  Pack = 'Pack',
  PackageKeg = 'PackageKeg',
  PackageWholesaler = 'PackageWholesaler',
  Paint = 'Paint',
  Pallet = 'Pallet',
  Pencil = 'Pencil',
  PhoneClassic = 'PhoneClassic',
  Pilsner = 'Pilsner',
  PinActive = 'PinActive',
  PinChurn = 'PinChurn',
  PinClosed = 'PinClosed',
  PinInactive = 'PinInactive',
  PinIndirect = 'PinIndirect',
  PinLabeling = 'PinLabeling',
  PinParked = 'PinParked',
  PinProspect = 'PinProspect',
  PinSeveral = 'PinSeveral',
  Pin = 'Pin',
  Pint = 'Pint',
  Plus = 'Plus',
  Power = 'Power',
  RadiobuttonOff = 'RadiobuttonOff',
  RadiobuttonOn = 'RadiobuttonOn',
  Refresh = 'Refresh',
  Restaurant = 'Restaurant',
  Retry = 'Retry',
  Salesrep = 'Salesrep',
  Save = 'Save',
  SearchUser = 'SearchUser',
  Search = 'Search',
  Sent = 'Sent',
  Settings = 'Settings',
  Share = 'Share',
  ShieldExclamation = 'ShieldExclamation',
  ShieldSecurity = 'ShieldSecurity',
  Shop = 'Shop',
  SignOut = 'SignOut',
  SpeachBalloonComplaint = 'SpeachBalloonComplaint',
  SpeachBalloonLivechat = 'SpeachBalloonLivechat',
  SpeachBalloon = 'SpeachBalloon',
  StarFilled = 'StarFilled',
  Star = 'Star',
  Survey = 'Survey',
  Sync = 'Sync',
  TapGlass = 'TapGlass',
  Tap = 'Tap',
  TechnicalSupport = 'TechnicalSupport',
  Text = 'Text',
  ThirdParty = 'ThirdParty',
  ThumbDown = 'ThumbDown',
  ThumbUp = 'ThumbUp',
  ToggleOff = 'ToggleOff',
  ToggleOn = 'ToggleOn',
  Trash = 'Trash',
  Trophy = 'Trophy',
  Truck = 'Truck',
  Tulipe = 'Tulipe',
  Twitter = 'Twitter',
  Underline = 'Underline',
  Upload = 'Upload',
  ViewGrid = 'ViewGrid',
  ViewList = 'ViewList',
  Volume = 'Volume',
  Wheat = 'Wheat',
  World = 'World'
}

export { IconColor, IconSize };
