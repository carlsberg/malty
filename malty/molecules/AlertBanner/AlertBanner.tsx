import { Link, LinkColor, LinkStyle } from '@carlsberggroup/malty.atoms.link';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Alert, IconColor } from '@carlsberggroup/malty.icons.alert';
import { Close } from '@carlsberggroup/malty.icons.close';
import { Information } from '@carlsberggroup/malty.icons.information';
import { ItemCheck } from '@carlsberggroup/malty.icons.item-check';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import { getBreakpointNumber } from '@carlsberggroup/malty.utils.helpers';
import React, { KeyboardEvent, PropsWithChildren, RefObject, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useScrollPosition } from './AlertBanner.helper';
import {
  CloseButtonContainer,
  Container,
  ContentRow,
  FadeText,
  FadeWrapper,
  MessageContainer,
  StyledAction,
  StyledMessage
} from './AlertBanner.styled';
import { AlertBannerProps, AlertBannerType } from './AlertBanner.types';

export const iconColorsMap = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.DigitalBlack,
  [AlertBannerType.Error]: IconColor.White,
  [AlertBannerType.Success]: IconColor.DigitalBlack
};

const textColorsMap = {
  [AlertBannerType.Information]: TextColor.White,
  [AlertBannerType.Warning]: TextColor.DigitalBlack,
  [AlertBannerType.Error]: TextColor.White,
  [AlertBannerType.Success]: TextColor.DigitalBlack
};

export const AlertBanner = ({
  alerts,
  breakpoint = layoutProps.small['device-max-width'].value,
  animation,
  onActiveAlertChange
}: PropsWithChildren<AlertBannerProps>) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeAlert, setActiveAlert] = useState(1);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [alertsArray, setAlertsArray] = useState(alerts);
  const currentAlert = alertsArray[activeAlert - 1];
  const breakpointNumber = getBreakpointNumber(breakpoint);
  const isMobile = width < breakpointNumber;
  const [textWrapperSize, setTextWrapperSize] = useState<number | undefined>(0);
  const alertBannerStyledMessage: RefObject<HTMLDivElement> = useRef(null);
  const { showAnimations, triggerYPosition, isBannerTextCompressed, toggleBannerTextCompress } = animation || {
    showAnimations: false,
    triggerYPosition: 0,
    isBannerTextCompressed: false,
    toggleBannerTextCompress: undefined
  };
  const hasMoreThanOneAlert = alertsArray.length > 1;
  const showBottomArea = hasMoreThanOneAlert || !!currentAlert.action;
  const displayContentInWhiteColor =
    currentAlert.type !== AlertBannerType.Warning && currentAlert.type !== AlertBannerType.Success;

  const handleToggle = (value: boolean) => {
    if (isMobile) {
      toggleBannerTextCompress?.(value);
    }
  };

  const showAlertBannerDetails = () => {
    if (isBannerTextCompressed && isMobile) {
      handleToggle(false);
    }
  };

  const setNewAlertBannerDetailsState = (newState: boolean) => {
    handleToggle(newState);
  };

  useScrollPosition(
    ({ currPos }) => {
      const scrollBiggerThanTriggerPosition = () =>
        isMobile && showAnimations && Math.abs(currPos.y) > triggerYPosition;
      if (scrollBiggerThanTriggerPosition() && !isBannerTextCompressed) {
        setNewAlertBannerDetailsState(true);
        return;
      }
      if (!scrollBiggerThanTriggerPosition() && isBannerTextCompressed) {
        setNewAlertBannerDetailsState(false);
      }
    },
    [isMobile, showAnimations, isBannerTextCompressed],
    200
  );

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const changeMobileTextWrapperSize = () => {
    if (alertBannerStyledMessage.current) {
      setTextWrapperSize(alertBannerStyledMessage.current.clientHeight);
    }
  };

  useEffect(() => {
    if (isMobile) {
      changeMobileTextWrapperSize();
    }
  }, [activeAlert, isMobile]);

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

  const triggerAnimation = () => isBannerTextCompressed || false;

  useEffect(() => {
    onActiveAlertChange?.(currentAlert);
  }, [currentAlert, onActiveAlertChange]);

  if (!alertsArray.length) {
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
        breakpoint={breakpoint}
      >
        <Link
          color={displayContentInWhiteColor ? LinkColor.White : LinkColor.DigitalBlack}
          linkStyle={LinkStyle.MediumSmallBold}
        >
          {currentAlert.actionName}
        </Link>
      </StyledAction>
    );
  };

  const handleDismiss = () => {
    if (currentAlert.onDismiss) {
      const newAnnouncementContentArray = alertsArray.filter((item) => item.eid !== currentAlert.eid);
      setAlertsArray(newAnnouncementContentArray);
      if (hasMoreThanOneAlert && activeAlert === alertsArray.length) {
        setActiveAlert(activeAlert - 1);
      }
      return currentAlert.onDismiss();
    }
    return () => null;
  };

  const renderCloseButton = () => (
    <CloseButtonContainer
      triggerFadeAnimation={triggerAnimation()}
      data-testid={`${currentAlert.dataQaId}-close-icon`}
      onClick={handleDismiss}
      onKeyUp={handleOnKeyUp(currentAlert.onDismiss)}
      tabIndex={0}
      role="button"
      aria-label="Close button"
      theme={theme}
    >
      {currentAlert.dismissible && <Close color={iconColorsMap[currentAlert.type]} />}
    </CloseButtonContainer>
  );

  const renderMessage = () =>
    isMobile ? (
      <FadeText fire={triggerAnimation()} currentElementHeight={textWrapperSize}>
        <StyledMessage
          hideText={triggerAnimation()}
          isMobile
          ref={alertBannerStyledMessage}
          theme={theme}
          color={textColorsMap[currentAlert.type]}
        >
          <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
            {currentAlert.message}
          </Text>
        </StyledMessage>
      </FadeText>
    ) : (
      <StyledMessage hideText={triggerAnimation()} theme={theme} color={textColorsMap[currentAlert.type]}>
        <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
          {currentAlert.message}
        </Text>
      </StyledMessage>
    );

  const renderMobileActionsContent = () => {
    if (showBottomArea) {
      return (
        <FadeWrapper theme={theme} show={isBannerTextCompressed} data-testid="fade-wrapper">
          <ContentRow theme={theme}>
            {hasMoreThanOneAlert ? (
              <Pagination
                count={alertsArray.length}
                onChange={(pageNr) => setActiveAlert(Number(pageNr))}
                currentPage={activeAlert}
                type={PaginationType.Compact}
                isWhite={displayContentInWhiteColor}
                dataTestId="alert-banner-pagination"
              />
            ) : null}
            {renderAction()}
          </ContentRow>
        </FadeWrapper>
      );
    }
    return null;
  };

  const renderIcon = () => {
    if (!currentAlert.icon) return null;

    const iconMap = {
      [AlertBannerType.Information]: <Information color={iconColorsMap[currentAlert.type]} />,
      [AlertBannerType.Warning]: <Alert color={iconColorsMap[currentAlert.type]} />,
      [AlertBannerType.Error]: <Alert color={iconColorsMap[currentAlert.type]} />,
      [AlertBannerType.Success]: <ItemCheck color={iconColorsMap[currentAlert.type]} />
    };

    return iconMap[currentAlert.type];
  };

  return (
    <Container type={currentAlert.type} theme={theme}>
      <ContentRow
        data-testid={`${currentAlert.dataQaId}-AlertBanner-content`}
        theme={theme}
        onClick={showAlertBannerDetails}
      >
        {!isMobile && hasMoreThanOneAlert ? (
          <Pagination
            dataTestId="alert-banner-pagination"
            count={alertsArray.length}
            onChange={(pageNr) => setActiveAlert(Number(pageNr))}
            currentPage={activeAlert}
            type={PaginationType.Compact}
            isWhite={displayContentInWhiteColor}
          />
        ) : null}
        <MessageContainer
          theme={theme}
          applyMarginBottom={!showBottomArea}
          breakpoint={breakpoint}
          data-testid={`${currentAlert.dataQaId}-AlertBanner-message-content`}
        >
          {renderIcon()}
          {renderMessage()}
          {!isMobile && currentAlert.action && renderAction()}
        </MessageContainer>
        {renderCloseButton()}
      </ContentRow>
      {isMobile && renderMobileActionsContent()}
    </Container>
  );
};
