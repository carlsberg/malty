import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import React, { FC } from 'react';
import { AlertBannerType } from '../../AlertBanner.types';

export const iconColorsMap = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.Primary,
  [AlertBannerType.Error]: IconColor.White
};

const IconMap: FC<{ type: AlertBannerType }> = ({ type }) => {
  const map = {
    [AlertBannerType.Information]: (
      <Icon name={IconName.Information} color={iconColorsMap[type]} size={IconSize.Medium} />
    ),
    [AlertBannerType.Warning]: <Icon name={IconName.Alert} color={iconColorsMap[type]} size={IconSize.Medium} />,
    [AlertBannerType.Error]: <Icon name={IconName.Alert} color={iconColorsMap[type]} size={IconSize.Medium} />
  };

  return map[type];
};

const AlertIcon: FC<{ type: AlertBannerType }> = ({ type }) => <IconMap type={type} />;

export { AlertIcon };
