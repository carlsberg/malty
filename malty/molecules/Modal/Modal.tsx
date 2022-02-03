import { Button, SizeTypes } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import {
  Align as TextAlignType,
  Size as TextSizeType,
  Text,
  Weight as TextWeightType
} from '@carlsberggroup/malty.atoms.text';
import React from 'react';
import {
  StyledButtonContainer,
  StyledButtonsWrapper,
  StyledCloseIconContainer,
  StyledContainer,
  StyledIconContainer,
  StyledImgContainer,
  StyledModalWrapper,
  StyledTextContainer,
  StyledTitleContainer
} from './Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal = ({ open, setOpen, info, buttons, image }: ModalProps) => {
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
              {info.icon && (
                <StyledIconContainer>
                  <Icon name={info.icon} size={IconSizesTypes.Large} color={IconColors.Primary} onClick={closeModal} />
                </StyledIconContainer>
              )}
              <StyledTitleContainer>
                <Text align={TextAlignType.Center} weight={TextWeightType.Bold}>
                  {info.title}
                </Text>
              </StyledTitleContainer>
              <StyledTextContainer>
                <Text align={TextAlignType.Center} size={TextSizeType.MediumSmall}>
                  {info.text}
                </Text>
              </StyledTextContainer>

              {image && (
                <StyledImgContainer>
                  <img src={image} />
                </StyledImgContainer>
              )}

              {buttons && (
                <StyledButtonsWrapper>
                  {buttons.map((btnInstance, index: number) => (
                    <StyledButtonContainer key={index}>
                      <Button
                        fullWidth
                        size={SizeTypes.Large}
                        style={btnInstance.variant}
                        onClick={btnInstance.onClick}
                      >
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
