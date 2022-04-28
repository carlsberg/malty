import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActionContainer,
  StyledActionItem,
  StyledAlertInLine,
  StyledAlertInLineWrapper,
  StyledContent,
  StyledTextContainer,
  StyledTitle
} from './InlineAlert.styled';
import { InlineAlertColor, InlineAlertProps } from './InlineAlert.types';

export const Alert = ({
  icon,
  size,
  color = InlineAlertColor.Notification,
  dataQaId,
  firstAction,
  firstActionText,
  secondAction,
  secondActionText,
  message,
  title
}: InlineAlertProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const labelFontColor =
    color === InlineAlertColor.Notification || color === InlineAlertColor.Fail
      ? TextColor.White
      : TextColor.DigitalBlack;
  const alertIconColor =
    color === InlineAlertColor.Notification || color === InlineAlertColor.Fail ? IconColor.White : IconColor.Primary;
  const actionButtonColor = color === InlineAlertColor.Notification || color === InlineAlertColor.Fail;

  const onFirstAction = () => {
    if (firstAction) {
      firstAction();
    }
  };

  const onSecondAction = () => {
    if (secondAction) {
      secondAction();
    }
  };

  const renderIcon = () => (
    <Icon
      className="inline-alert-icon"
      name={icon}
      size={IconSize.Small}
      color={alertIconColor}
      data-testid={`${dataQaId}-icon`}
    />
  );

  const renderLabel = () => (
    <StyledTextContainer data-alert-label-container>
      <Text color={labelFontColor} textStyle={TextStyle.MediumSmallDefault}>
        {message}
      </Text>
    </StyledTextContainer>
  );

  const renderActions = () => (
    <StyledActionContainer theme={theme} data-testid={`${dataQaId}-action-container`}>
      <StyledActionItem theme={theme}>
        <Button
          negative={actionButtonColor}
          size={ButtonSize.Small}
          type={ButtonType.Default}
          style={ButtonStyle.Link}
          onClick={onFirstAction}
          data-testid={`${dataQaId}-first-action`}
        >
          {firstActionText}
        </Button>
      </StyledActionItem>
      <StyledActionItem theme={theme}>
        <Button
          negative={actionButtonColor}
          size={ButtonSize.Small}
          type={ButtonType.Default}
          style={ButtonStyle.Link}
          onClick={onSecondAction}
          data-testid={`${dataQaId}-second-action`}
        >
          {secondActionText}
        </Button>
      </StyledActionItem>
    </StyledActionContainer>
  );

  return (
    <StyledAlertInLineWrapper theme={theme}>
      <StyledAlertInLine
        hasTitle={!!title}
        hasActions={!!firstActionText || !!secondActionText}
        hasIcon={!!icon}
        size={size}
        data-testid={`${dataQaId}-alert-container`}
        color={color}
        theme={theme}
      >
        {title && (
          <StyledTitle theme={theme}>
            <Text textStyle={TextStyle.MediumSmallBold} color={labelFontColor}>
              {title}
            </Text>
          </StyledTitle>
        )}
        <StyledContent theme={theme} data-testid={`${dataQaId}-alert-content`}>
          {!title && !firstActionText && !secondActionText && icon && renderIcon()}
          {renderLabel()}
        </StyledContent>

        {(firstActionText || secondActionText) && renderActions()}
      </StyledAlertInLine>
    </StyledAlertInLineWrapper>
  );
};
