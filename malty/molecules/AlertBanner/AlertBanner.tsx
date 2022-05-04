import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { FC, KeyboardEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  CloseButtonContainer,
  Container,
  ContentRow,
  MessageContainer,
  StyledAction,
  StyledMessage
} from './AlertBanner.styled';
import { AlertBannerProps, AlertBannerType } from './AlertBanner.types';

export const iconColorsMap = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.Primary,
  [AlertBannerType.Error]: IconColor.White
};

const textColorsMap = {
  [AlertBannerType.Information]: TextColor.White,
  [AlertBannerType.Warning]: TextColor.DigitalBlack,
  [AlertBannerType.Error]: TextColor.White
};

export const AlertBanner: FC<AlertBannerProps> = ({ alerts, breakpoint = 768 }) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const [activeAlert, setActiveAlert] = useState(1);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const currentAlert = alerts[activeAlert - 1];
  const isMobile = width <= breakpoint;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleOnKeyUp =
    (action?: () => void) =>
    ({ key }: KeyboardEvent<HTMLDivElement>) => {
      if (key === 'Enter' && action) {
        action();
      }
    };

  if (!alerts?.length) {
    return null;
  }

  const renderAction = () => {
    if (!currentAlert.action) {
      return null;
    }
    return (
      <StyledAction
        data-testid={`${currentAlert.dataQaId}-action-container`}
        tabIndex={0}
        onClick={currentAlert.action}
        onKeyUp={handleOnKeyUp(currentAlert.action)}
        role="button"
        theme={theme}
        isMobile={isMobile}
      >
        <Button
          negative={currentAlert.type !== AlertBannerType.Warning}
          size={ButtonSize.Small}
          type={ButtonType.Default}
          style={ButtonStyle.Link}
        >
          {currentAlert.actionName}
        </Button>
      </StyledAction>
    );
  };

  const renderCloseButton = () => (
    <CloseButtonContainer
      data-testid={`${currentAlert.dataQaId}-close-icon`}
      onClick={currentAlert.dismiss || (() => null)}
      onKeyUp={handleOnKeyUp(currentAlert.dismiss)}
      tabIndex={0}
      role="button"
      theme={theme}
    >
      {currentAlert.dismiss && (
        <Icon
          className="inline-AlertBanner-icon"
          name={IconName.Close}
          size={IconSize.Medium}
          color={iconColorsMap[currentAlert.type]}
        />
      )}
    </CloseButtonContainer>
  );

  const renderIcon = () => {
    const iconNameMap = {
      [AlertBannerType.Information]: IconName.Information,
      [AlertBannerType.Warning]: IconName.Alert,
      [AlertBannerType.Error]: IconName.Alert
    };

    return (
      <Icon name={iconNameMap[currentAlert.type]} color={iconColorsMap[currentAlert.type]} size={IconSize.Medium} />
    );
  };

  const renderMessage = () => (
    <StyledMessage>
      <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
        {currentAlert.message}
      </Text>
    </StyledMessage>
  );

  return (
    <Container type={currentAlert.type} theme={theme}>
      <ContentRow data-testid={`${currentAlert.dataQaId}-AlertBanner-content`} theme={theme}>
        {!isMobile && (
          <Pagination
            count={alerts.length}
            onChange={(pageNr) => setActiveAlert(pageNr)}
            currentPage={activeAlert}
            type={PaginationType.Compact}
            isWhite={currentAlert.type !== AlertBannerType.Warning}
          />
        )}
        <MessageContainer theme={theme} isMobile={isMobile}>
          {currentAlert.icon && renderIcon()}
          {renderMessage()}
          {!isMobile && currentAlert.action && renderAction()}
        </MessageContainer>
        {renderCloseButton()}
      </ContentRow>
      {isMobile && (
        <ContentRow theme={theme}>
          <Pagination
            count={alerts.length}
            onChange={(pageNr) => setActiveAlert(pageNr)}
            currentPage={activeAlert}
            type={PaginationType.Compact}
            isWhite={currentAlert.type !== AlertBannerType.Warning}
          />
          {renderAction()}
        </ContentRow>
      )}
    </Container>
  );
};
