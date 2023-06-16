import { Text } from '@carlsberggroup/malty.atoms.text';
import styled, { css } from 'styled-components';

export const StyledHero = styled.header<{
  imageSrc: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  height: ${({ height }) => height ?? 'initial'};
  padding: ${({ theme }) => `${theme.sizes.s.value} ${theme.sizes.m.value}`};

  ${({ theme, imageSrc }) => {
    if (imageSrc) {
      return css`
        background-image: url(${imageSrc});
        background-color: ${theme.colors.colours.default['digital-black'].value};
        background-blend-mode: overlay;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      `;
    }

    return css`
      background-color: ${theme.colors.colours.default['digital-black'].value};
    `;
  }};

  @media only screen and (min-width: ${({ theme }) => theme.layout.xsmall['device-max-width']?.value}) {
    padding: ${({ theme }) => `${theme.sizes.s.value} ${theme.sizes.l.value}`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    padding: ${({ theme }) => `${theme.sizes.s.value} ${theme.sizes['2xl'].value}`};
  }
`;

export const StyledContentWrapper = styled.div<{
  withScroll: boolean;
}>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ withScroll }) => (withScroll ? 'auto' : 'initial')};
`;

export const StyledTitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.m.value};
`;

export const StyledActionsWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
  margin-top: ${({ theme }) => theme.sizes['2xl'].value};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.layout.xsmall['device-max-width']?.value}) {
    width: initial;
    flex-direction: row;
    margin-top: ${({ theme }) => theme.sizes['3xl'].value};
  }
`;

export const StyledScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

export const StyledText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.sizes.s.value};
`;
