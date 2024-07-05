import { Button } from '@carlsberggbs/malty.atoms.button';
import { Headline, HeadlineColor, HeadlineStyle } from '@carlsberggbs/malty.atoms.headline';
import { Pill, PillProps, PillSize, PillType } from '@carlsberggbs/malty.atoms.pill';
import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledBannerContainer, StyledBannerContent, StyledBannerImage, StyledButtonsWrapper } from './Banner.styled';
import { ActionButtonProps, BannerLayout, BannerProps } from './Banner.types';

export const Banner = ({
  imageSrc,
  imageHeight,
  label,
  title,
  description,
  negative = false,
  reverse = false,
  layout = BannerLayout.Full,
  actions,
  dataTestId = 'banner-component',
  ...props
}: BannerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const labelProps: PillProps = {
    text: label && typeof label === 'string' ? label : '',
    type: negative ? PillType.Archive : PillType.Primary,
    size: PillSize.Medium,
    icon: undefined
  };
  if (label && typeof label === 'object') {
    (Object.keys(label) as Array<keyof PillProps>).forEach((key) => {
      (labelProps[key] as keyof PillProps) = (label as PillProps)[key];
    });
  }

  return (
    <StyledBannerContainer
      negative={negative}
      reverse={reverse}
      layout={layout}
      theme={theme}
      data-testid={dataTestId}
      {...props}
    >
      <StyledBannerContent layout={layout} theme={theme} data-testid={`${dataTestId}-content`}>
        {label ? (
          <Pill text={labelProps.text} type={labelProps.type} size={labelProps.size} icon={labelProps.icon} />
        ) : null}
        {title ? (
          <Headline
            headlineStyle={HeadlineStyle.Banner}
            color={negative ? HeadlineColor.White : HeadlineColor.DigitalBlack}
          >
            {title}
          </Headline>
        ) : null}
        {description ? (
          <Text textStyle={TextStyle.MediumBold} color={negative ? TextColor.White : TextColor.DigitalBlack}>
            {description}
          </Text>
        ) : null}
        {actions && Array.isArray(actions) ? (
          <StyledButtonsWrapper theme={theme}>
            {actions.map((btnInstance: ActionButtonProps) => (
              <Button {...btnInstance} key={btnInstance.key} negative={negative} />
            ))}
          </StyledButtonsWrapper>
        ) : (
          actions
        )}
      </StyledBannerContent>
      <StyledBannerImage
        layout={layout}
        negative={negative}
        imageSrc={imageSrc}
        imageHeight={imageHeight}
        theme={theme}
        data-testid={`${dataTestId}-image`}
      />
    </StyledBannerContainer>
  );
};
