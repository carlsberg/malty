import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import React, { FC, KeyboardEvent } from 'react';
import { CloseButtonContainer } from '../../AlertBanner.styled';
import { AlertBannerI, AlertBannerType } from '../../AlertBanner.types';

const iconColorMapping = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.Primary,
  [AlertBannerType.Error]: IconColor.White
};

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
          color={iconColorMapping[type]}
        />
      )}
    </CloseButtonContainer>
  );
};

export { CloseButton };
