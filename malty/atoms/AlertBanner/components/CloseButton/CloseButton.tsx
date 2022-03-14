import { Icon, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import React, { FC, KeyboardEvent } from 'react';
import { CloseButtonContainer } from '../../AlertBanner.styled';
import { AlertBannerI } from '../../AlertBanner.types';
import { iconColorsMap } from '../Icon/Icon';

const CloseButton: FC<Pick<AlertBannerI, 'type' | 'dismiss' | 'dataQaId'>> = ({ type, dismiss, dataQaId }) => {
  const handleOnKeyUp = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key === 'Enter' && dismiss) {
      dismiss();
    }
  };

  return (
    <CloseButtonContainer
      data-testid={`${dataQaId}-close-icon`}
      onClick={dismiss || (() => null)}
      onKeyUp={handleOnKeyUp}
      tabIndex={0}
      role="button"
    >
      {dismiss && (
        <Icon
          className="inline-AlertBanner-icon"
          name={IconName.Close}
          size={IconSize.Medium}
          color={iconColorsMap[type]}
        />
      )}
    </CloseButtonContainer>
  );
};

export { CloseButton };
