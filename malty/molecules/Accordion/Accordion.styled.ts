import { ChevronDown } from '@carlsberg/malty.icons.chevron-down';
import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { AccordionColor, StyledAccordionWrapperProps } from './Accordion.types';

export const StyledAccordionWrapper = styled.ul<StyledAccordionWrapperProps>`
  padding-inline-start: 0;

  li {
    ${({ variant, theme }) =>
      css`
        background-color: ${variant === AccordionColor.Support
          ? theme.colors.colours.support[20].value
          : 'transparent'};
      `}
  }

  ${space}
`;

// Accordion item styles
export const StyledAccordionItem = styled.li`
  margin: ${({ theme }) => theme.sizes.s.value} 0 0 0;
  list-style-type: none;
`;
export const StyledAccordionHeader = styled.div<{
  variant?: AccordionColor;
  size?: string;
  paddingSize?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: ${({ size }) => size};
  padding: 0 ${({ paddingSize }) => paddingSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][5].value};
  }
`;
export const StyledAccordionBody = styled.div<{
  disabled?: boolean;
  open?: boolean;
  paddingSize?: string;
}>`
  transition: all 0.2s ease-in-out;
  height: 0;
  opacity: 0;
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-weight'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  visibility: hidden;
  padding: 0 ${({ paddingSize }) => paddingSize};
  &.show {
    padding: ${({ paddingSize }) => paddingSize};
    visibility: visible;
    height: auto;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`;
export const StyledTitle = styled.div``;

export const StyledChevronDown = styled(ChevronDown)<{
  disabled?: boolean;
  open?: boolean;
}>`
  transition: transform 0.2s linear;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(-180deg);
      transition: transform 0.2s linear;
    `}
`;
