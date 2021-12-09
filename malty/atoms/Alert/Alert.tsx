import { Button, ButtonStyle, ButtonTypes, SizeTypes } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Color, Size, Text } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
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
  StyledAlertToastWrapper,
  StyledContent,
  StyledDismissContainer,
  StyledTextContainer
} from './Alert.styled';
import { AlertBackgroundColor, AlertProps, AlertType } from './Alert.types';

export const Alert = ({
  type,
  label,
  action = true,
  icon,
  dismiss,
  heightSize,
  color = AlertBackgroundColor.Notification,
  dataQaId,
  firstAction,
  firstActionText,
  secondAction,
  secondActionText
}: AlertProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const labelFontColor = type !== AlertType.InLine ? Color.White : Color.Default;
  const alertIconColor = type !== AlertType.InLine ? IconColors.White : IconColors.Primary;
  const actionButtonColor = action && type !== AlertType.InLine && true;

  let ComponentWrapper = StyledAlertToastWrapper;
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
      ComponentContainer = StyledAlert;
      ComponentContent = StyledAlertContent;
      break;
    default:
      break;
  }

  const renderAlertIcon = () => (
    <Icon
      className="inline-alert-icon"
      name={IconNamesTypes.Alert}
      size={IconSizesTypes.Medium}
      color={alertIconColor}
    />
  );

  const renderLabel = () => (
    <StyledTextContainer data-alert-label-container>
      <Text color={labelFontColor} size={Size.MediumSmall}>
        {label}
      </Text>
    </StyledTextContainer>
  );

  const renderDismissContainer = () => (
    <StyledDismissContainer data-testid="close-icon" onClick={() => dismiss && dismiss(false)}>
      <Icon
        className="inline-alert-icon"
        name={IconNamesTypes.Close}
        size={IconSizesTypes.Medium}
        color={IconColors.White}
      />
    </StyledDismissContainer>
  );

  const renderActions = () => (
    <StyledActionContainer>
      <StyledActionItem>
        <Button
          isWhite={actionButtonColor}
          size={SizeTypes.Small}
          type={ButtonTypes.Button}
          style={ButtonStyle.Link}
          onClick={firstAction}
        >
          {firstActionText}
        </Button>
      </StyledActionItem>

      {secondAction && (
        <StyledActionItem>
          <Button isWhite={actionButtonColor} type={ButtonTypes.Button} style={ButtonStyle.Link} onClick={secondAction}>
            {secondActionText}
          </Button>
        </StyledActionItem>
      )}
    </StyledActionContainer>
  );

  return (
    <ComponentWrapper>
      <ComponentContainer heightSize={heightSize} data-testid={dataQaId} color={color} theme={theme}>
        <ComponentContent>
          {icon && renderAlertIcon()}
          {renderLabel()}
          {action && type !== AlertType.InLine && renderActions()}
        </ComponentContent>
        {type !== AlertType.InLine && renderDismissContainer()}
        {action && type === AlertType.InLine && renderActions()}
      </ComponentContainer>
    </ComponentWrapper>
  );
};
