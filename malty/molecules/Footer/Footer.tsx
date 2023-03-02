import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Headline, HeadlineColor, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Link, LinkColor, LinkStyle } from '@carlsberggroup/malty.atoms.link';
import { Text, TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAdress, StyledCluster, StyledFooter, StyledRow, StyledSocialMedia } from './Footer.styled';
import { FooterProps } from './Footer.types';

const defaultAdress = 'Carlsberg Breweries A/S J.C. Jacobsens Gade 1, 1799 Copenhagen V Denmark';
const defaultCopyright = '© Powered by Carlsberg Group';

export const Footer = ({
  brandIcon = IconName.CarlsbergFilled,
  brandInfo = defaultAdress,
  content,
  socialMedia,
  copyright = defaultCopyright,
  dataQaId
}: FooterProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledFooter data-testid={dataQaId} theme={theme}>
      <Icon name={brandIcon} color={IconColor.Support60} size={IconSize.Medium} />
      <StyledAdress data-testid={`${dataQaId}-brand-info`} theme={theme}>
        <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support60} align={TextAlign.Center}>
          {brandInfo}
        </Text>
      </StyledAdress>
      <StyledRow theme={theme}>
        {content?.map((section) => (
          <StyledCluster data-testid={`${dataQaId}-cluster-${section.title}`} theme={theme} key={section.title}>
            <Headline headlineStyle={HeadlineStyle.Medium} color={HeadlineColor.White}>
              {section.title}
            </Headline>
            {section.link?.map((el) => (
              <Link
                dataTestId={`${dataQaId}-link-${el.label}`}
                key={el.label}
                color={LinkColor.White}
                url={el.url}
                linkStyle={LinkStyle.MediumSmallDefault}
              >
                {el.label}
              </Link>
            ))}
          </StyledCluster>
        ))}
      </StyledRow>
      <StyledSocialMedia data-testid={`${dataQaId}-social-media`} theme={theme}>
        {socialMedia?.map((social) => (
          <Button
            dataTestId={`${dataQaId}-social-media-${social.name}`}
            negative
            key={social.name}
            icon={social.name as unknown as IconName}
            style={ButtonStyle.Transparent}
            url={social.url}
          />
        ))}
      </StyledSocialMedia>
      <Text
        dataQaId={`${dataQaId}-copyright`}
        align={TextAlign.Center}
        textStyle={TextStyle.SmallBold}
        color={TextColor.Support60}
      >
        {copyright as string}
      </Text>
    </StyledFooter>
  );
};
