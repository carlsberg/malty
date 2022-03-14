import React, { FC, useState } from 'react';
import { Container, MessageMobileContainer, MobileContent } from './AlertBanner.styled';
import { AlertBannerProps } from './AlertBanner.types';
import { Action } from './components/Action';
import { CloseButton } from './components/CloseButton';
import { AlertIcon } from './components/Icon';
import { Message } from './components/Message';

export const AlertBannerMobile: FC<AlertBannerProps> = ({ alerts }) => {
  const [activeAlert, setActiveAlert] = useState(0);

  if (!alerts?.length) {
    return null;
  }
  const currentAlert = alerts[activeAlert];

  const Pagination: FC = () => {
    if (alerts.length <= 1) {
      return <div />;
    }
    return (
      <div style={{ gridArea: 'pagination' }}>
        <button type="button" onClick={() => setActiveAlert(activeAlert - 1)}>
          prev
        </button>
        <button type="button" onClick={() => setActiveAlert(activeAlert + 1)}>
          next
        </button>
      </div>
    );
  };
  return (
    <Container type={currentAlert.type}>
      <MobileContent justifyContent="space-between" data-testid={`${currentAlert.dataQaId}-AlertBanner-content`}>
        <MessageMobileContainer>
          {currentAlert.icon && <AlertIcon type={currentAlert.type} />}
          <Message message={currentAlert.message} type={currentAlert.type} />
        </MessageMobileContainer>
        {currentAlert.dismiss && (
          <CloseButton type={currentAlert.type} dismiss={currentAlert.dismiss} dataQaId={currentAlert.dataQaId} />
        )}
      </MobileContent>
      <MobileContent justifyContent={!!currentAlert.action && alerts.length > 1 ? 'space-between' : 'end'}>
        <Pagination />
        {currentAlert.action && (
          <Action
            type={currentAlert.type}
            action={currentAlert.action}
            actionName={currentAlert.actionName}
            dataQaId={currentAlert.dataQaId}
          />
        )}
      </MobileContent>
    </Container>
  );
};
