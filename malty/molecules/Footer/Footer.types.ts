import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface FooterProps {
  brandIcon?: IconName;
  brandInfo?: string;
  content?: FooterSections[];
  socialMedia?: FooterSocialMedia[];
  copyright?: string;
  dataQaId?: string;
}

export interface FooterSections {
  title: string;
  link: FooterLink[];
}
export interface FooterLink {
  label: string;
  url: string;
}
export interface FooterSocialMedia {
  name: FooterSocialMediaIconName;
  url: string;
}

export enum FooterSocialMediaIconName {
  AppDropbox = 'AppDropbox',
  AppFacebook = 'AppFacebook',
  AppGithub = 'AppGithub',
  AppInstagram = 'AppInstagram',
  AppLinkedin = 'AppLinkedin',
  AppSkype = 'AppSkype',
  Twitter = 'Twitter'
}
