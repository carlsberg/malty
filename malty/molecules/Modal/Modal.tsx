import { Button } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import { Text } from '@carlsberggroup/malty.atoms.text';
import React from 'react';
import {
  StyledButtonContainer,
  StyledButtonsWrapper,
  StyledCloseIconContainer,
  StyledContainer,
  StyledIconContainer,
  StyledModalWrapper,
  StyledTextContainer,
  StyledTitleContainer
} from './Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal = ({ open, setOpen, info, buttons }: ModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <>
          <Overlay />
          <StyledContainer>
            <StyledModalWrapper>
              <StyledCloseIconContainer onClick={closeModal}>
                <Icon name={IconNamesTypes.Close} size={IconSizesTypes.Large} color={IconColors.Primary} />
              </StyledCloseIconContainer>
              <StyledIconContainer>
                <Icon name={info.icon} size={IconSizesTypes.Large} color={IconColors.Primary} onClick={closeModal} />
              </StyledIconContainer>
              <StyledTitleContainer>
                <Text align="center" weight="bold">
                  {info.title}
                </Text>
              </StyledTitleContainer>
              <StyledTextContainer>
                <Text align="center" size="medium-small">
                  {info.text}
                </Text>
              </StyledTextContainer>

              {buttons && (
                <StyledButtonsWrapper>
                  {buttons.map((btnInstance, index: number) => (
                    <StyledButtonContainer key={index}>
                      <Button fullWidth style={btnInstance.style} onClick={btnInstance.onClick}>
                        {btnInstance.label}
                      </Button>
                    </StyledButtonContainer>
                  ))}
                </StyledButtonsWrapper>
              )}
            </StyledModalWrapper>
          </StyledContainer>
        </>
      ) : null}
    </>
  );
};
