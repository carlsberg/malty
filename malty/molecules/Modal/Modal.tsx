import { Button, SizeTypes } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import {
  Align as TextAlignType,
  Size as TextSizeType,
  Text,
  Weight as TextWeightType
} from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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

export const Modal = ({ open, setOpen, text, title, icon, buttons, image }: ModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <>
      {open ? (
        <>
          <Overlay />
          <StyledContainer>
            <StyledModalWrapper theme={theme}>
              <StyledCloseIconContainer onClick={closeModal} theme={theme}>
                <Icon name={IconNamesTypes.Close} size={IconSizesTypes.Large} color={IconColors.Primary} />
              </StyledCloseIconContainer>
              {icon && (
                <StyledIconContainer theme={theme}>
                  <Icon name={icon} size={IconSizesTypes.Large} color={IconColors.Primary} onClick={closeModal} />
                </StyledIconContainer>
              )}
              <StyledTitleContainer theme={theme}>
                <Text align={TextAlignType.Center} weight={TextWeightType.Bold}>
                  {title}
                </Text>
              </StyledTitleContainer>
              <StyledTextContainer theme={theme}>
                <Text align={TextAlignType.Center} size={TextSizeType.MediumSmall}>
                  {text}
                </Text>
              </StyledTextContainer>

              {image && (
                <StyledImgContainer theme={theme}>
                  <img src={image} />
                </StyledImgContainer>
              )}

              {buttons && (
                <StyledButtonsWrapper theme={theme}>
                  {buttons.map((btnInstance, index: number) => (
                    <StyledButtonContainer theme={theme} key={index}>
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
