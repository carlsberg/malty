import { CloneIcon, IconColor, IconSize } from '@carlsberg/malty.atoms.base-icon';
import { Button, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { Headline, HeadlineColor, HeadlineStyle } from '@carlsberg/malty.atoms.headline';
import { Link, LinkColor, LinkStyle } from '@carlsberg/malty.atoms.link';
import { Text, TextAlign, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { AppDropbox } from '@carlsberg/malty.icons.app-dropbox';
import { AppFacebook } from '@carlsberg/malty.icons.app-facebook';
import { AppGithub } from '@carlsberg/malty.icons.app-github';
import { AppInstagram } from '@carlsberg/malty.icons.app-instagram';
import { AppLinkedin } from '@carlsberg/malty.icons.app-linkedin';
import { AppSkype } from '@carlsberg/malty.icons.app-skype';
import { CarlsbergFilled } from '@carlsberg/malty.icons.carlsberg-filled';
import { Twitter } from '@carlsberg/malty.icons.twitter';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAdress, StyledCluster, StyledFooter, StyledRow, StyledSocialMedia } from './Footer.styled';
import { FooterProps, FooterSocialMediaIconName } from './Footer.types';

const defaultAdress = 'Carlsberg Breweries A/S J.C. Jacobsens Gade 1, 1799 Copenhagen V Denmark';
const defaultCopyright = '© Powered by Carlsberg Group';

export const Footer = ({
  brandIcon = <CarlsbergFilled />,
  brandInfo = defaultAdress,
  content,
  socialMedia,
  copyright = defaultCopyright,
  dataQaId
}: FooterProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const renderSocialMediaIcon = (socialMediaIconName: FooterSocialMediaIconName) => {
    const icons = {
      [FooterSocialMediaIconName.AppDropbox]: <AppDropbox />,
      [FooterSocialMediaIconName.AppFacebook]: <AppFacebook />,
      [FooterSocialMediaIconName.AppGithub]: <AppGithub />,
      [FooterSocialMediaIconName.AppInstagram]: <AppInstagram />,
      [FooterSocialMediaIconName.AppLinkedin]: <AppLinkedin />,
      [FooterSocialMediaIconName.Twitter]: <Twitter />,
      [FooterSocialMediaIconName.AppSkype]: <AppSkype />
    };

    return icons[socialMediaIconName];
  };

  return (
    <StyledFooter data-testid={dataQaId} theme={theme}>
      <CloneIcon icon={brandIcon} color={IconColor.Support60} size={IconSize.Medium} />
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
                href={el.url}
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
            icon={renderSocialMediaIcon(social.name)}
            style={ButtonStyle.Transparent}
            url={social.url}
          />
        ))}
      </StyledSocialMedia>
      <Text
        dataTestId={`${dataQaId}-copyright`}
        align={TextAlign.Center}
        textStyle={TextStyle.SmallBold}
        color={TextColor.Support60}
      >
        {copyright as string}
      </Text>
    </StyledFooter>
  );
};
