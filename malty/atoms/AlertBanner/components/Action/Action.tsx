import { Button, ButtonSize, ButtonStyle, ButtonType } from '@carlsberggroup/malty.atoms.button';
import React, { FC, KeyboardEvent } from 'react';
import { StyledActionItem } from '../../AlertBanner.styled';
import { AlertBannerI, AlertBannerType } from '../../AlertBanner.types';

const Action: FC<Pick<AlertBannerI, 'type' | 'actionName' | 'action' | 'dataQaId'>> = ({
  type,
  actionName,
  action,
  dataQaId
}) => {
  const handleOnKeyUp = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key === 'Enter' && action) {
      action();
    }
  };
  return (
    <StyledActionItem
      data-testid={`${dataQaId}-action-container`}
      tabIndex={0}
      onClick={action}
      onKeyUp={handleOnKeyUp}
      role="button"
    >
      <Button
        isWhite={type !== AlertBannerType.Warning}
        size={ButtonSize.Small}
        type={ButtonType.Button}
        style={ButtonStyle.Link}
        data-testid={`${dataQaId}-first-action`}
      >
        {actionName}
      </Button>
    </StyledActionItem>
  );
};

export { Action };
