import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#212833',
    white: '#FFFFFF',
    supportDark: '#516073',
    support: '#8BA0B9',
    supportLight: '#CFD9E7',
    supportLighter: '#F1F4F8',
    disabled: '#D5DBE2',
    black: '#000000',
    transparent: 'transparent',
    fail: '#F45F5E'
  },
  informationColors: {
    new: '#1ACDCC',
    live: '#F38291',
    multiple: '#656DDF',
    hold: '#FFC06A',
    archive: '#8FBCD3',
    disable: '#D5DBE2',
    active: '#0AC39B',
    prospect: '#FFCA2B',
    parked: '#3997EC',
    indirect: '#8BA0B9',
    wholesaler: '#FCA7EC',
    closed: '#1C2025'
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px'
  },
  fontFamily: {
    headings: `'Montserrat', Arial, sans-serif`,
    text: `'Montserrat', Arial, sans-serif`
  }
};

export { theme };
