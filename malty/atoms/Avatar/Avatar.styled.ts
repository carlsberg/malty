import styled, { css } from 'styled-components';
import { AvatarSize } from './Avatar.types';

export const StyledCamera = styled.div<{
  size?: AvatarSize;
}>`
  transition: opacity 0.25s ease-in-out;
  visibility: hidden;
  opacity: 0;
  display: ${({ size }) => (size === AvatarSize.Large || size === AvatarSize.XLarge ? 'block' : 'none')};
  position: absolute;
  box-sizing: content-box;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  ${({ theme }) =>
    css`
      border: ${theme.borders['border-1px--solid']['border-width'].value}
        ${theme.borders['border-1px--solid']['border-style'].value} ${theme.colors.colours.support[20].value};
    `}
  border-radius: ${({ theme }) => theme.sizes.s.value};
  width: ${({ theme, size }) => {
    if (size === AvatarSize.Large) {
      return theme.sizes.ms.value;
    }
    return theme.sizes.m.value;
  }};
  height: ${({ theme, size }) => {
    if (size === AvatarSize.Large) {
      return theme.sizes.ms.value;
    }
    return theme.sizes.m.value;
  }};

  ${({ size, theme }) =>
    size === AvatarSize.Large
      ? css`
          left: calc(50% - ${theme.sizes.ms.value} / 2 + 18px);
        `
      : css`
          left: calc(50% - ${theme.sizes.m.value} / 2 + ${theme.sizes.m.value});
        `};
  ${({ size, theme }) =>
    size === AvatarSize.Large
      ? css`
          top: calc(50% - ${theme.sizes.ms.value} / 2 - 18px);
        `
      : css`
          top: calc(50% - ${theme.sizes.m.value} / 2 - ${theme.sizes.m.value});
        `};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledAvatar = styled.div<{
  profileImg?: string;
  size?: string;
  fontSize?: string;
  loading: boolean;
  editable: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.colours.support[40].value};
  background-image: ${({ profileImg }) => `${profileImg ? `url(${profileImg})` : 'unset'}`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  ${({ editable, loading }) =>
    editable &&
    !loading &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][25].value};
        background-blend-mode: multiply;
        ${StyledCamera} {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.25s ease-in-out;
        }
      }
    `}

  & span {
    color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ theme }) => theme.typography.desktop.text.medium_bold['font-weight'].value};
    text-transform: uppercase;
    white-space: nowrap;
  }
`;
export const StyledLoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.colours.overlay.white[75].value};
  display: flex;
  align-items: center;
  justify-content: center;
`;
