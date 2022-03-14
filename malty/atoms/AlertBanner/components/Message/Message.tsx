import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import React, { FC } from 'react';
import { StyledMessage } from '../../AlertBanner.styled';
import { AlertBannerI, AlertBannerType } from '../../AlertBanner.types';

const colorMapping = {
  [AlertBannerType.Information]: TextColor.White,
  [AlertBannerType.Warning]: TextColor.DigitalBlack,
  [AlertBannerType.Error]: TextColor.White
};

const Message: FC<Pick<AlertBannerI, 'message' | 'type'>> = ({ message, type }) => (
  <StyledMessage>
    <Text textStyle={TextStyle.MediumSmallDefault} color={colorMapping[type]}>
      {message}
    </Text>
  </StyledMessage>
);

export { Message };
