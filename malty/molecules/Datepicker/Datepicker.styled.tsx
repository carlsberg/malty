import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledDatepicker = styled.div<{
  disabled?: boolean;
  readOnly?: boolean;
  size: string;
}>`
  position: relative;
  & .react-datepicker-popper {
    width: 100%;
    max-width: 544px;
    min-width: 304px;
    z-index: 1;
  }
  & .datepickerInput {
    border-radius: 0;
    position: relative;
    padding: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    height: ${({ size }) => `${size}`};
    width: 100%;
    min-width: 150px;
    box-sizing: border-box;
    text-align: left;
    transition: 0.25s ease-in-out;
    transition-property: border-color, color;
    padding: 0 ${({ theme }) => theme.sizes.s.value};
    border-width: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}`};
    border-style: ${({ theme }) => `${theme.borders['border-1px--solid']['border-style'].value}`};
    border-color: ${({ theme }) => `${theme.colors.colours.support[40].value}`};
    font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
    outline: none;
    &:hover,
    &:focus,
    &:focus-visible {
      outline: none;
    }
    &:hover {
      border-color: ${({ theme }) => theme.colors.colours.information.indirect.value};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
      color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    }
    ${({ disabled }) =>
      disabled &&
      css`
        cursor: default;
        border-color: ${({ theme }) => `${theme.colors.colours.system['disable-light-theme'].value}`};
        background-color: ${({ theme }) => theme.colors.colours.default.white.value};
        color: ${({ theme }) => `${theme.colors.colours.system['disable-light-theme'].value}`};
        svg {
          fill: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
        }
      `}

    ${({ readOnly }) =>
      readOnly &&
      css`
        cursor: default;
        border-color: ${({ theme }) => `${theme.colors.colours.support[40].value}`};
        background-color: ${({ theme }) => theme.colors.colours.support[20].value};
        color: ${({ theme }) => `${theme.colors.colours.support[80].value}`};
        svg {
          fill: ${({ theme }) => theme.colors.colours.support[80].value};
        }
      `}

    &::placeholder {
      color: ${({ theme }) => `${theme.colors.colours.support[60].value}`};
    }
  }
`;

export const StyledInputIcon = styled.span<{
  disabled?: boolean;
  readOnly?: boolean;
}>`
  display: inline-block;
  transform: translateY(-50%);
  top: 50%;
  right: 14px;
  position: absolute;
  z-index: 1;
  pointer-events: none;

  ${({ disabled }) =>
    disabled &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
    `}
  ${({ readOnly }) =>
    readOnly &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.colours.support[80].value};
      }
    `}
`;

export const StyledContainer = styled.div`
  //place container on top of datepicker input border
  margin-top: -1px;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  box-sizing: border-box;
  border: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}
  ${theme.borders['border-1px--solid']['border-style'].value}
  ${theme.colors.colours.default['digital-black'].value}`};
  width: 100%;
  user-select: none;
  padding: ${({ theme }) => `${theme.sizes.xl.value} ${theme.sizes.m.value} ${theme.sizes.m.value}`};
`;

export const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  position: relative;
  & .react-datepicker__header {
    background-color: transparent;
    border-bottom: none;
    text-align: left;
  }
  & .react-datepicker__current-month {
    font-size: ${({ theme }) => theme.typography.desktop.text.medium_default['font-size'].value};
    font-weight: ${({ theme }) => theme.typography.desktop.headline.medium['font-weight'].value};
    display: inline;
  }
  & .react-datepicker__header__dropdown {
    display: inline;
    & .react-datepicker__year-dropdown-container {
      display: inline;
      & .react-datepicker__year-select {
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxMy41ODU4TDYuNzA3MTEgOC4yOTI4OUM2LjMxNjU4IDcuOTAyMzcgNS42ODM0MiA3LjkwMjM3IDUuMjkyODkgOC4yOTI4OUM0LjkwMjM3IDguNjgzNDIgNC45MDIzNyA5LjMxNjU4IDUuMjkyODkgOS43MDcxMUwxMS4yOTI5IDE1LjcwNzFDMTEuNjgzNCAxNi4wOTc2IDEyLjMxNjYgMTYuMDk3NiAxMi43MDcxIDE1LjcwNzFMMTguNzA3MSA5LjcwNzExQzE5LjA5NzYgOS4zMTY1OCAxOS4wOTc2IDguNjgzNDIgMTguNzA3MSA4LjI5Mjg5QzE4LjMxNjYgNy45MDIzNyAxNy42ODM0IDcuOTAyMzcgMTcuMjkyOSA4LjI5Mjg5TDEyIDEzLjU4NThaIiBmaWxsPSIjMjEyODMzIi8+Cjwvc3ZnPgo=');
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: right;
        appearance: none;
        padding-right: ${({ theme }) => theme.sizes.m.value};
        color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        font-size: ${({ theme }) => theme.typography.desktop.text.medium_default['font-size'].value};
        font-weight: ${({ theme }) => theme.typography.desktop.headline.medium['font-weight'].value};
        font-family: ${({ theme }) => theme.typography.desktop.headline.medium['font-family'].value};
        margin-left: ${({ theme }) => theme.sizes['2xs'].value};
        border: 0;
        &:focus-visible {
          outline: 0;
        }
        option {
          font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
        }
      }
    }
  }
  & .react-datepicker__day-names {
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
    width: 100%;
    margin-top: ${({ theme }) => theme.sizes.l.value};
    margin-bottom: ${({ theme }) => theme.sizes.m.value};
    background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
    justify-content: space-between;
    display: flex;
    padding: 0 ${({ theme }) => theme.sizes.xs.value};
    box-sizing: border-box;
  }
  & .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.colours.support['60'].value};
    width: auto;
    display: inline-block;
    font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
    width: ${({ theme }) => theme.sizes.l.value};
    line-height: ${({ theme }) => theme.sizes.l.value};
    text-align: center;
    margin: 0.166rem;
  }
  & .react-datepicker__month-container {
    width: 100%;
    overflow: hidden;
  }
  & .react-datepicker__month {
    padding: 0 ${({ theme }) => theme.sizes.xs.value};
  }
  & .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.sizes['4xs'].value};
    white-space: nowrap;
  }
  & .react-datepicker__day {
    position: relative;
    text-align: center;
    cursor: pointer;
    width: ${({ theme }) => theme.sizes.l.value};
    height: ${({ theme }) => theme.sizes.l.value};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
    &:hover {
      background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
    }
  }
  & .react-datepicker__day--today {
    border: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}
      ${theme.borders['border-1px--solid']['border-style'].value}
      ${theme.colors.colours.default['digital-black'].value}`};
    &:hover {
      background-color: inherit;
    }
  }
  & .react-datepicker__day--in-range {
    position: relative;
    background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  }
  & .react-datepicker__day--selected,
  & .react-datepicker__day--range-end {
    background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    color: ${({ theme }) => theme.colors.colours.default.white.value};
    &:hover {
      background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    }
  }
  & .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--selected) {
    background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
  }
  & .react-datepicker__day--in-selecting-range ~ .react-datepicker__day--in-selecting-range,
  & .react-datepicker__day--in-selecting-range:first-of-type,
  & .react-datepicker__day--in-range:not(.react-datepicker__day--range-start) {
    &::before {
      width: 130%;
      height: 100%;
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      z-index: -1;
      right: 50%;
    }
  }
  & .react-datepicker__day--in-selecting-range,
  & .react-datepicker__day--in-range:not(.react-datepicker__day--range-end) {
    &::after {
      width: 130%;
      height: 100%;
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      z-index: -1;
      left: 50%;
    }
  }
  & .react-datepicker__navigation {
    width: ${({ theme }) => theme.sizes.l.value};
    height: ${({ theme }) => theme.sizes.l.value};
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    padding: 0;
    border: none;
    z-index: 1;
    text-indent: -999em;
    overflow: hidden;
    top: ${({ theme }) => `-${theme.sizes['2xs'].value}`};
  }
  & .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: ${({ theme }) => theme.typography.desktop.headline.large['font-size'].value};
    width: 0;
    &:before {
      border-radius: 1px;
      border-width: ${({ theme }) =>
        `${theme.borders['border-2px--solid']['border-width'].value} ${theme.borders['border-2px--solid']['border-width'].value} 0 0`};
      border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
      content: '';
      display: block;
      height: ${({ theme }) => theme.sizes['2xs'].value};
      position: absolute;
      top: ${({ theme }) => theme.sizes['3xs'].value};
      width: ${({ theme }) => theme.sizes['2xs'].value};
      border-style: solid;
    }
  }
  & .react-datepicker__day--disabled {
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_default['font-weight'].value};
    color: ${({ theme }) => theme.colors.colours.support['60'].value};
  }
  & .react-datepicker__navigation--previous {
    left: initial;
    right: ${({ theme }) => theme.sizes['4xl'].value};
  }
  & .react-datepicker__navigation-icon--previous {
    &:before {
      transform: rotate(225deg);
    }
  }
  & .react-datepicker__navigation--next {
    left: initial;
    right: ${({ theme }) => theme.sizes.xs.value};
  }
  & .react-datepicker__navigation-icon--next {
    &:before {
      transform: rotate(45deg);
      left: ${({ theme }) => `-${theme.sizes.xs.value}`};
    }
  }
`;

export const StyledCaptionContainer = styled.ul`
  margin-top: ${({ theme }) => theme.sizes.m.value};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['3xs'].value};
  padding: 0 ${({ theme }) => theme.sizes.xs.value};
`;

export const StyledCaption = styled.li<{ color: string; borderColor: string; dotted?: boolean }>`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes['2xs'].value};
    height: ${({ theme }) => theme.sizes['2xs'].value};
    margin-right: ${({ theme }) => theme.sizes['2xs'].value};
    border: ${({ theme, borderColor, dotted = false }) => {
      const borderRootStyle = dotted ? theme.borders['border-1px--dotted'] : theme.borders['border-1px--solid'];

      return `${borderRootStyle['border-width'].value} ${borderRootStyle['border-style'].value} ${borderColor}`;
    }};
    border-radius: ${({ theme }) => theme.sizes['2xs'].value};
    background-color: ${({ color }) => color};
  }
`;

export const StyledActionsContainer = styled.div`
  margin-top: ${({ theme }) => theme.sizes.m.value};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.sizes.s.value};
  padding: 0 ${({ theme }) => theme.sizes.xs.value};
  & > * {
    flex: 0.5 1 0;
  }
`;
