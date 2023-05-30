import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Headline, HeadlineColor, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Pill, PillColor, PillProps, PillSize } from '@carlsberggroup/malty.atoms.pill';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledBannerContainer, StyledBannerContent, StyledBannerImage, StyledButtonsWrapper } from './Banner.styled';
import { BannerLayout, BannerProps } from './Banner.types';

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
  dataTestId = 'banner-component'
}: BannerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const labelProps: PillProps = {
    text: label && typeof label === 'string' ? label : '',
    color: negative ? PillColor.Archive : PillColor.Primary,
    size: PillSize.Medium,
    icon: undefined
  };
  if (label && typeof label === 'object') {
    (Object.keys(label) as Array<keyof PillProps>).forEach((key) => {
      (labelProps[key] as keyof PillProps) = (label as PillProps)[key];
    });
  }

  return (
    <StyledBannerContainer negative={negative} reverse={reverse} layout={layout} theme={theme} data-testid={dataTestId}>
      <StyledBannerContent layout={layout} theme={theme} data-testid={`${dataTestId}-content`}>
        {label ? (
          <Pill text={labelProps.text} color={labelProps.color} size={labelProps.size} icon={labelProps.icon} />
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
            {actions.map((btnInstance, index: number) => (
              <div key={btnInstance.key || `button${index}`}>
                <Button
                  size={ButtonSize.Large}
                  style={ButtonStyle[btnInstance.variant as ButtonStyle]}
                  negative={negative}
                  onClick={btnInstance.onClick}
                  url={btnInstance.url}
                >
                  {btnInstance.label}
                </Button>
              </div>
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
