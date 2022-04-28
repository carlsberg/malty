import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledActionItem, StyledAlertToastWrapper, StyledDismissContainer, StyledToast } from './Toast.styled';
import { ToastColor, ToastProps } from './Toast.types';

export const Toast = ({
  showCloseIcon = true,
  onClose,
  color = ToastColor.Notification,
  dataQaId,
  onCustomAction,
  customActionText,
  message,
  autoHideDuration = 5000
}: ToastProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

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
    setToastVisible(false);
    if (autoHideTimer) clearTimeout(autoHideTimer);
  };

  // Action handlers
  const handleDismiss = () => {
    if (onClose) {
      onClose(false);
      hideToast();
    }
  };

  const handleCustomAction = () => {
    if (onCustomAction) {
      onCustomAction();
      hideToast();
    }
  };

  const renderDismissContainer = () => (
    <StyledDismissContainer theme={theme} data-testid={`${dataQaId}-close-icon`} onClick={handleDismiss}>
      <Icon name={IconName.Close} size={IconSize.Medium} color={IconColor.White} />
    </StyledDismissContainer>
  );

  const renderCustomAction = () => (
    <StyledActionItem>
      <Button
        negative
        size={ButtonSize.Small}
        type={ButtonType.Default}
        style={ButtonStyle.Link}
        onClick={handleCustomAction}
        data-testid={`${dataQaId}-action`}
      >
        {customActionText}
      </Button>
    </StyledActionItem>
  );

  if (!isToastVisible) {
    return null;
  }

  return (
    <StyledAlertToastWrapper theme={theme}>
      <StyledToast data-testid={`${dataQaId}-container`} color={color} theme={theme}>
        <Text dataQaId={`${dataQaId}-message`} color={TextColor.White} textStyle={TextStyle.MediumSmallDefault}>
          {message}
        </Text>

        {customActionText && renderCustomAction()}
        {!customActionText && showCloseIcon && renderDismissContainer()}
      </StyledToast>
    </StyledAlertToastWrapper>
  );
};
