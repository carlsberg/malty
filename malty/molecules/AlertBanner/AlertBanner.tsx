import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Link, LinkColor, LinkStyle } from '@carlsberggroup/malty.atoms.link';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import React, { FC, KeyboardEvent, RefObject, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { usePrevious, useScrollPosition } from './AlertBanner.helper';
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
  [AlertBannerType.Error]: IconColor.White
};

const textColorsMap = {
  [AlertBannerType.Information]: TextColor.White,
  [AlertBannerType.Warning]: TextColor.DigitalBlack,
  [AlertBannerType.Error]: TextColor.White
};

export const AlertBanner: FC<AlertBannerProps> = ({
  alerts,
  breakpoint = layoutProps.small['device-max-width'].value,
  animation
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeAlert, setActiveAlert] = useState(1);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [alertsArray, setAlertsArray] = useState(alerts);
  const currentAlert = alertsArray[activeAlert - 1];
  const breakpointNumber = Number(breakpoint.split('px')[0]);
  const isMobile = width <= breakpointNumber;
  const [textWrapperSize, setTextWrapperSize] = useState<number | undefined>(0);
  const alertBannerStyledMessage: RefObject<HTMLDivElement> = useRef(null);
  const { showAnimations, triggerYPosition, isBannerTextCompressed, toggleBannerTextCompress } = animation || {
    showAnimations: false,
    triggerYPosition: 0,
    isBannerTextCompressed: false,
    toggleBannerTextCompress: undefined
  };
  const prevAlertSelection: number = usePrevious(activeAlert);
  const prevAlertArraySize: number = usePrevious(alertsArray.length);

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
    if (
      isMobile &&
      (!prevAlertSelection || prevAlertSelection !== activeAlert || prevAlertArraySize !== alertsArray.length)
    ) {
      changeMobileTextWrapperSize();
    }
  }, [activeAlert, prevAlertSelection, prevAlertArraySize, alertsArray.length]);

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

  if (!alertsArray?.length) {
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
          color={currentAlert.type !== AlertBannerType.Warning ? LinkColor.White : LinkColor.DigitalBlack}
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
      if (alertsArray.length > 1 && activeAlert === alertsArray.length) {
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
      theme={theme}
    >
      {currentAlert.dismissible && (
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

  const renderMessage = () =>
    isMobile ? (
      <FadeText fire={triggerAnimation()} currentElementHeight={textWrapperSize}>
        <StyledMessage hideText={triggerAnimation()} isMobile ref={alertBannerStyledMessage}>
          <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
            {currentAlert.message}
          </Text>
        </StyledMessage>
      </FadeText>
    ) : (
      <StyledMessage hideText={triggerAnimation()}>
        <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
          {currentAlert.message}
        </Text>
      </StyledMessage>
    );

  const renderMobileActionsContent = () => {
    if ((isMobile && alertsArray.length > 1) || currentAlert.action) {
      return (
        <FadeWrapper theme={theme} show={isBannerTextCompressed} data-testid="fade-wrapper">
          <ContentRow theme={theme}>
            <Pagination
              count={alertsArray?.length}
              onChange={(pageNr) => setActiveAlert(Number(pageNr))}
              currentPage={activeAlert}
              type={PaginationType.Compact}
              isWhite={currentAlert.type !== AlertBannerType.Warning}
              dataQaId="alert-banner-pagination"
            />
            {renderAction()}
          </ContentRow>
        </FadeWrapper>
      );
    }
    return null;
  };

  return (
    <Container type={currentAlert.type} theme={theme}>
      <ContentRow
        data-testid={`${currentAlert.dataQaId}-AlertBanner-content`}
        theme={theme}
        onClick={showAlertBannerDetails}
      >
        {!isMobile && (
          <Pagination
            count={alertsArray.length}
            onChange={(pageNr) => setActiveAlert(Number(pageNr))}
            currentPage={activeAlert}
            type={PaginationType.Compact}
            isWhite={currentAlert.type !== AlertBannerType.Warning}
          />
        )}
        <MessageContainer
          theme={theme}
          breakpoint={breakpoint}
          data-testid={`${currentAlert.dataQaId}-AlertBanner-message-content`}
        >
          {currentAlert.icon && renderIcon()}
          {renderMessage()}
          {!isMobile && currentAlert.action && renderAction()}
        </MessageContainer>
        {renderCloseButton()}
      </ContentRow>
      {isMobile && renderMobileActionsContent()}
    </Container>
  );
};
