import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { FC, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Content, DesktopContainer } from './AlertBanner.styled';
import { AlertBannerProps } from './AlertBanner.types';
import { Action } from './components/Action';
import { CloseButton } from './components/CloseButton';
import { AlertIcon } from './components/Icon';
import { Message } from './components/Message';

export const AlertBannerDesktop: FC<AlertBannerProps> = ({ alerts }) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeAlert, setActiveAlert] = useState(0);

  if (!alerts?.length) {
    return null;
  }
  const currentAlert = alerts[activeAlert];

  // TODO replace by malty's pagination
  const Pagination: FC = () => {
    if (alerts.length <= 1) {
      return <div />;
    }
    return (
      <div>
        <button type="button" role="role" onClick={() => setActiveAlert(activeAlert - 1)}>
          prev
        </button>
        <button type="button" role="role" onClick={() => setActiveAlert(activeAlert + 1)}>
          next
        </button>
      </div>
    );
  };
  return (
    <DesktopContainer
      data-testid={`${currentAlert.dataQaId}-AlertBanner-container`}
      theme={theme}
      type={currentAlert.type}
    >
      <Pagination />
      <Content>
        {currentAlert.icon && <AlertIcon type={currentAlert.type} />}
        <Message message={currentAlert.message} type={currentAlert.type} />
        {currentAlert.action && (
          <Action
            type={currentAlert.type}
            action={currentAlert.action}
            actionName={currentAlert.actionName}
            dataQaId={currentAlert.dataQaId}
          />
        )}
      </Content>
      <CloseButton type={currentAlert.type} dismiss={currentAlert?.dismiss} dataQaId={currentAlert.dataQaId} />
    </DesktopContainer>
  );
};
