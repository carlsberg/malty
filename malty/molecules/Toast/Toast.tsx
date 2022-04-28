import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActionContainer,
  StyledActionItem,
  StyledAlert,
  StyledAlertBannerWrapper,
  StyledAlertContent,
  StyledAlertInLine,
  StyledAlertInLineWithActions,
  StyledAlertInLineWrapper,
  StyledAlertToastContent,
  StyledAlertToastWrapper,
  StyledContent,
  StyledDismissContainer,
  StyledTextContainer,
  StyledToast
} from './Toast.styled';
import { AlertColor, AlertProps, AlertType } from './Toast.types';

export const Toast = ({
  type,
  action = true,
  icon,
  dismiss,
  heightSize,
  color = AlertColor.Notification,
  dataQaId,
  firstAction,
  firstActionText,
  secondAction,
  secondActionText,
  children,
  autoHideDuration = 5000,
  onHideToast
}: AlertProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const labelFontColor = type !== AlertType.InLine ? TextColor.White : TextColor.DigitalBlack;
  const alertIconColor = type !== AlertType.InLine ? IconColor.White : IconColor.Primary;
  const actionButtonColor = action && type !== AlertType.InLine && true;

  // Toast auto hide setup
  const [isToastVisible, setToastVisible] = useState(true);
  let autoHideTimer: ReturnType<typeof setTimeout> | null = null;

  const setAutoHideTimer = () => {
    if (autoHideTimer != null) {
      clearTimeout(autoHideTimer);
    }
    autoHideTimer = setTimeout(() => {
      hideToast();
    }, autoHideDuration) as unknown as ReturnType<typeof setTimeout>;
  };

  // set timeout on component mount
  useEffect(() => {
    setAutoHideTimer();
    return () => {
      if (autoHideTimer) {
        hideToast();
        clearTimeout(autoHideTimer);
      }
    };
  }, []);

  const hideToast = () => {
    if (type === AlertType.Toast) {
      setToastVisible(false);
      if (onHideToast) onHideToast();
      if (autoHideTimer) clearTimeout(autoHideTimer);
    }
  };

  // Action handlers
  const onDismissAction = () => {
    if (dismiss) {
      dismiss(false);
      hideToast();
    }
  };

  const onFirstAction = () => {
    if (firstAction) {
      firstAction();
      hideToast();
    }
  };

  const onSecondAction = () => {
    if (secondAction) {
      secondAction();
      hideToast();
    }
  };

  let ComponentWrapper = StyledAlertBannerWrapper;
  let ComponentContainer = StyledAlert;
  let ComponentContent = StyledAlertContent;

  switch (type) {
    case AlertType.InLine:
      if (action === true) {
        ComponentContainer = StyledAlertInLineWithActions;
      } else {
        ComponentContainer = StyledAlertInLine;
      }
      ComponentWrapper = StyledAlertInLineWrapper;
      ComponentContent = StyledContent;
      break;
    case AlertType.Banner:
      ComponentWrapper = StyledAlertBannerWrapper;
      ComponentContainer = StyledAlert;
      ComponentContent = StyledAlertContent;
      break;

    case AlertType.Toast:
      ComponentWrapper = StyledAlertToastWrapper;
      ComponentContainer = StyledToast;
      ComponentContent = StyledAlertToastContent;
      break;
    default:
      break;
  }

  const renderAlertIcon = () => (
    <Icon
      className="inline-alert-icon"
      name={IconName.Alert}
      size={IconSize.Medium}
      color={alertIconColor}
      data-testid={`${dataQaId}-icon`}
    />
  );

  const renderLabel = () => (
    <StyledTextContainer data-alert-label-container>
      <Text color={labelFontColor} textStyle={TextStyle.MediumSmallDefault}>
        {children}
      </Text>
    </StyledTextContainer>
  );

  const renderDismissContainer = () => (
    <StyledDismissContainer data-testid={`${dataQaId}-close-icon`} onClick={onDismissAction}>
      <Icon className="inline-alert-icon" name={IconName.Close} size={IconSize.Medium} color={IconColor.White} />
    </StyledDismissContainer>
  );

  const renderActions = () => (
    <StyledActionContainer data-testid={`${dataQaId}-action-container`}>
      <StyledActionItem alertType={type}>
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

      {secondAction && (
        <StyledActionItem alertType={type}>
          <Button
            negative={actionButtonColor}
            type={ButtonType.Default}
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

  if (!isToastVisible) {
    return null;
  }

  return (
    <ComponentWrapper>
      <ComponentContainer
        heightSize={heightSize}
        data-testid={`${dataQaId}-alert-container`}
        color={color}
        theme={theme}
      >
        <ComponentContent data-testid={`${dataQaId}-alert-content`}>
          {icon && renderAlertIcon()}
          {renderLabel()}
          {action && type !== AlertType.InLine && renderActions()}
        </ComponentContent>
        {dismiss && renderDismissContainer()}
        {action && type === AlertType.InLine && renderActions()}
      </ComponentContainer>
    </ComponentWrapper>
  );
};
