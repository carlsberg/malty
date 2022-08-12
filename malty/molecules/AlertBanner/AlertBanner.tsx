import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Link, LinkColor, LinkStyle } from '@carlsberggroup/malty.atoms.link';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';

import React, { FC, KeyboardEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  CloseButtonContainer,
  Container,
  ContentRow,
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
  animation = { showAnimation: false, triggerYPosition: 0, currentYOffset: 0 }
}) => {
  const { showAnimation, triggerYPosition, currentYOffset } = animation;
  const [hideSliderOptions, setHideSliderOptions] = useState(showAnimation);
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeAlert, setActiveAlert] = useState(1);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const currentAlert = alerts[activeAlert - 1];
  const breakpointNumber = Number(breakpoint.split('px')[0])
  const isMobile = width <= breakpointNumber;

  const handleShow = () => {
    setHideSliderOptions(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile && !hideSliderOptions) {
      setHideSliderOptions(true);
    }
  }, [isMobile, showAnimation, currentYOffset]);

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

  const triggerAnimation = () => showAnimation && hideSliderOptions && currentYOffset > triggerYPosition;

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

  const renderCloseButton = () => (
    <CloseButtonContainer
      triggerFadeAnimation={triggerAnimation()}
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
    <StyledMessage hideText={triggerAnimation()}>
      <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
        {currentAlert.message}
      </Text>
    </StyledMessage>
  );

  return (
    <Container type={currentAlert.type} theme={theme} onClick={handleShow}>
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
        <MessageContainer theme={theme} breakpoint={breakpoint}>
          {currentAlert.icon && renderIcon()}
          {renderMessage()}
          {!isMobile && currentAlert.action && renderAction()}
        </MessageContainer>
        {renderCloseButton()}
      </ContentRow>
      {isMobile && (
        <FadeWrapper
          theme={theme}
          show={hideSliderOptions}
          offsetY={currentYOffset}
          triggerYPosition={triggerYPosition}
        >
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
        </FadeWrapper>
      )}
    </Container>
  );
};
