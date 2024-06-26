import { space } from '@carlsberggbs/malty.utils.space';
import styled, { css } from 'styled-components';
import { AvatarSize, StyledAvatarProps } from './Avatar.types';

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

export const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  background-image: ${({ profileImg }) => `${profileImg ? `url(${profileImg})` : 'unset'}`};

  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.25s ease-in-out;
  cursor: ${({ editable }) => (editable ? 'pointer' : 'default')};
  ${({ editable, isLoading }) =>
    editable &&
    !isLoading &&
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

  ${({ theme, size }) => {
    switch (size) {
      case AvatarSize.Small: {
        return css`
          height: ${theme.sizes.m.value};
          width: ${theme.sizes.m.value};

          & span {
            color: ${theme.colors.colours.default['digital-black'].value};
            font-family: ${theme.typography.desktop.text.tiny_bold['font-family'].value};
            font-size: ${theme.typography.desktop.text.tiny_bold['font-size'].value};
            font-weight: ${theme.typography.desktop.text.tiny_bold['font-weight'].value};
            text-transform: uppercase;
            white-space: nowrap;
          }
        `;
      }
      case AvatarSize.Large: {
        return css`
          height: ${theme.sizes['3xl'].value};
          width: ${theme.sizes['3xl'].value};

          & span {
            color: ${theme.colors.colours.default['digital-black'].value};
            font-family: ${theme.typography.desktop.headline.medium['font-family'].value};
            font-size: ${theme.typography.desktop.headline.medium['font-size'].value};
            font-weight: ${theme.typography.desktop.headline.medium['font-weight'].value};
            text-transform: uppercase;
            white-space: nowrap;
          }
        `;
      }
      case AvatarSize.XLarge: {
        return css`
          height: ${theme.sizes['4xl'].value};
          width: ${theme.sizes['4xl'].value};

          & span {
            color: ${theme.colors.colours.default['digital-black'].value};
            font-family: ${theme.typography.desktop.headline.large['font-family'].value};
            font-size: ${theme.typography.desktop.headline.large['font-size'].value};
            font-weight: ${theme.typography.desktop.headline.large['font-weight'].value};
            text-transform: uppercase;
            white-space: nowrap;
          }
        `;
      }
      default: {
        return css`
          height: ${theme.sizes.xl.value};
          width: ${theme.sizes.xl.value};

          & span {
            color: ${theme.colors.colours.default['digital-black'].value};
            font-family: ${theme.typography.desktop.text.small_bold['font-family'].value};
            font-size: ${theme.typography.desktop.text.small_bold['font-size'].value};
            font-weight: ${theme.typography.desktop.text.small_bold['font-weight'].value};
            text-transform: uppercase;
            white-space: nowrap;
          }
        `;
      }
    }
  }}

  ${space}
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
