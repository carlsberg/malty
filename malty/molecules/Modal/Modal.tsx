import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Headline, HeadlineAlign, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import Close from '@carlsberggroup/malty.icons.close';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledButtonContainer,
  StyledButtonsWrapper,
  StyledCloseIconContainer,
  StyledContainer,
  StyledContentContainer,
  StyledModalWrapper,
  StyledTitleContainer
} from './Modal.styled';
import { ModalProps, ModalSize } from './Modal.types';

export const Modal = ({
  open,
  onClose,
  content,
  title,
  dismissible = true,
  actions,
  size = ModalSize.Medium,
  whiteBackground = false
}: ModalProps) => {
  const closeModal = () => {
    onClose();
  };
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <>
      {open ? (
        <>
          <Overlay isWhite={whiteBackground} />
          <StyledContainer>
            <StyledModalWrapper theme={theme} size={size}>
              {dismissible && (
                <StyledCloseIconContainer onClick={closeModal} theme={theme}>
                  <Close size={IconSize.Medium} color={IconColor.DigitalBlack} />
                </StyledCloseIconContainer>
              )}

              {title && (
                <StyledTitleContainer theme={theme}>
                  <Headline align={HeadlineAlign.Left} headlineStyle={HeadlineStyle.Large}>
                    {title}
                  </Headline>
                </StyledTitleContainer>
              )}
              <StyledContentContainer theme={theme}>{content}</StyledContentContainer>

              {actions && Array.isArray(actions) ? (
                <StyledButtonsWrapper theme={theme}>
                  {actions.map((btnInstance, index: number) => (
                    <StyledButtonContainer theme={theme} key={btnInstance.key || `button${index}`}>
                      <Button
                        fullWidth
                        size={ButtonSize.Large}
                        style={ButtonStyle[btnInstance.variant as ButtonStyle] }
                        onClick={btnInstance.onClick}
                      >
                        {btnInstance.label}
                      </Button>
                    </StyledButtonContainer>
                  ))}
                </StyledButtonsWrapper>
              ) : (
                actions
              )}
            </StyledModalWrapper>
          </StyledContainer>
        </>
      ) : null}
    </>
  );
};
