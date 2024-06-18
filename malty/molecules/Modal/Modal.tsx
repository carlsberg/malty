import { Button } from '@carlsberggbs/malty.atoms.button';
import { Headline, HeadlineAlign, HeadlineStyle } from '@carlsberggbs/malty.atoms.headline';
import { Overlay } from '@carlsberggbs/malty.atoms.overlay';
import { Close } from '@carlsberggbs/malty.icons.close';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
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
import { ActionButtonProps, ModalProps, ModalSize } from './Modal.types';

export const Modal = ({
  open,
  onClose,
  content,
  title,
  dismissible = true,
  actions,
  size = ModalSize.Medium,
  whiteBackground = false,
  overlayZindex = 999
}: ModalProps) => {
  const closeModal = () => {
    onClose();
  };
  const theme = useContext(ThemeContext) || defaultTheme;

  return open ? (
    <>
      <Overlay isWhite={whiteBackground} zIndex={overlayZindex} />
      <StyledContainer>
        <StyledModalWrapper theme={theme} size={size}>
          {dismissible && (
            <StyledCloseIconContainer onClick={closeModal} theme={theme}>
              <Close dataTestId="close-icon" />
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
              {actions.map((btnInstance: ActionButtonProps) => (
                <StyledButtonContainer theme={theme} key={btnInstance.key}>
                  <Button fullWidth {...btnInstance} />
                </StyledButtonContainer>
              ))}
            </StyledButtonsWrapper>
          ) : (
            actions
          )}
        </StyledModalWrapper>
      </StyledContainer>
    </>
  ) : null;
};
