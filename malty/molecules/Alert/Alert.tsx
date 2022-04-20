import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
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
} from './Alert.styled';
import { AlertColor, AlertProps } from './Alert.types';

export const Alert = ({
  action = false,
  icon = false,
  size,
  color = AlertColor.Notification,
  dataQaId,
  firstAction,
  firstActionText,
  secondAction,
  secondActionText,
  message,
  title
}: AlertProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const labelFontColor =
    color === AlertColor.Notification || color === AlertColor.Fail ? TextColor.White : TextColor.DigitalBlack;
  const alertIconColor =
    color === AlertColor.Notification || color === AlertColor.Fail ? IconColor.White : IconColor.Primary;
  const actionButtonColor = action && (color === AlertColor.Notification || color === AlertColor.Fail);

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

  const renderAlertIcon = () => (
    <Icon
      className="inline-alert-icon"
      name={IconName.Alert}
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
    <StyledActionContainer data-testid={`${dataQaId}-action-container`}>
      <StyledActionItem>
        <Button
          isWhite={actionButtonColor}
          size={ButtonSize.Small}
          type={ButtonType.Button}
          style={ButtonStyle.Link}
          onClick={onFirstAction}
          data-testid={`${dataQaId}-first-action`}
        >
          {firstActionText}
        </Button>
      </StyledActionItem>

      {secondAction && (
        <StyledActionItem>
          <Button
            isWhite={actionButtonColor}
            size={ButtonSize.Small}
            type={ButtonType.Button}
            style={ButtonStyle.Link}
            onClick={onSecondAction}
            data-testid={`${dataQaId}-second-action`}
          >
            {secondActionText}
          </Button>
        </StyledActionItem>
      )}
    </StyledActionContainer>
  );

  return (
    <StyledAlertInLineWrapper>
      <StyledAlertInLine
        hasTitle={!!title}
        hasActions={action}
        hasIcon={icon}
        size={size}
        data-testid={`${dataQaId}-alert-container`}
        color={color}
        theme={theme}
      >
        {title && (
          <StyledTitle>
            <Text textStyle={TextStyle.MediumSmallBold} color={labelFontColor}>
              {title}
            </Text>
          </StyledTitle>
        )}
        <StyledContent data-testid={`${dataQaId}-alert-content`}>
          {!title && icon && renderAlertIcon()}
          {renderLabel()}
        </StyledContent>

        {action && renderActions()}
      </StyledAlertInLine>
    </StyledAlertInLineWrapper>
  );
};
