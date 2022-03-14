import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import React, { FC } from 'react';
import { AlertBannerType } from '../../AlertBanner.types';

const iconColorMapping = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.Primary,
  [AlertBannerType.Error]: IconColor.White
};

const IconsMapping: FC<{ type: AlertBannerType }> = ({ type }) => {
  const iconMap = {
    [AlertBannerType.Information]: (
      <Icon name={IconName.Information} color={iconColorMapping[type]} size={IconSize.Medium} />
    ),
    [AlertBannerType.Warning]: <Icon name={IconName.Alert} color={iconColorMapping[type]} size={IconSize.Medium} />,
    [AlertBannerType.Error]: <Icon name={IconName.Alert} color={iconColorMapping[type]} size={IconSize.Medium} />
  };
  return iconMap[type];
};

const AlertIcon: FC<{ type: AlertBannerType }> = ({ type }) => <IconsMapping type={type} />;

export { AlertIcon };
