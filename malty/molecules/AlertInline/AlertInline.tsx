import { CloneIcon, IconColor, IconSize } from '@carlsberggbs/malty.atoms.base-icon';
import { Link, LinkColor, LinkStyle } from '@carlsberggbs/malty.atoms.link';
import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
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
} from './AlertInline.styled';
import { AlertInlineColor, AlertInlineProps, AlertInlineSize } from './AlertInline.types';

export const AlertInline = ({
  icon,
  size = AlertInlineSize.Default,
  color = AlertInlineColor.Notification,
  dataQaId,
  firstAction,
  firstActionText,
  secondAction,
  secondActionText,
  message,
  title,
  ...props
}: AlertInlineProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const labelFontColor =
    color === AlertInlineColor.Notification || color === AlertInlineColor.Fail
      ? TextColor.White
      : TextColor.DigitalBlack;
  const alertIconColor =
    color === AlertInlineColor.Notification || color === AlertInlineColor.Fail
      ? IconColor.White
      : IconColor.DigitalBlack;
  const actionButtonColor = color === AlertInlineColor.Notification || color === AlertInlineColor.Fail;

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

  const renderLabel = () => (
    <StyledTextContainer data-alert-label-container>
      <Text
        color={labelFontColor}
        textStyle={size === AlertInlineSize.Default ? TextStyle.MediumSmallDefault : TextStyle.SmallDefault}
      >
        {message}
      </Text>
    </StyledTextContainer>
  );

  const renderActions = () => (
    <StyledActionContainer theme={theme} data-testid={`${dataQaId}-action-container`}>
      <StyledActionItem theme={theme}>
        <Link
          color={actionButtonColor ? LinkColor.White : LinkColor.DigitalBlack}
          linkStyle={LinkStyle.MediumSmallBold}
          onClick={onFirstAction}
          dataTestId={`${dataQaId}-first-action`}
        >
          {firstActionText}
        </Link>
      </StyledActionItem>
      <StyledActionItem theme={theme}>
        <Link
          color={actionButtonColor ? LinkColor.White : LinkColor.DigitalBlack}
          linkStyle={LinkStyle.MediumSmallBold}
          onClick={onSecondAction}
          dataTestId={`${dataQaId}-second-action`}
        >
          {secondActionText}
        </Link>
      </StyledActionItem>
    </StyledActionContainer>
  );

  return (
    <StyledAlertInLineWrapper theme={theme} {...props}>
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
          {!title && !firstActionText && !secondActionText && (
            <CloneIcon icon={icon} dataTestId={`${dataQaId}-icon`} color={alertIconColor} size={IconSize.Small} />
          )}
          {renderLabel()}
        </StyledContent>

        {(firstActionText || secondActionText) && renderActions()}
      </StyledAlertInLine>
    </StyledAlertInLineWrapper>
  );
};
