import { allIconsStoryOptions } from '@carlsberggroup/malty.atoms.base-icon/AllIconsMap';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Footer as FooterComponent } from './Footer';
import { FooterProps, FooterSections, FooterSocialMedia, FooterSocialMediaIconName } from './Footer.types';

export default {
  title: 'Layout/Footer',
  component: FooterComponent,
  parameters: {
    importObject: 'Footer',
    importPath: '@carlsberggroup/malty.molecules.footer'
  },
  argTypes: {
    brandInfo: {
      control: 'text',
      description: 'adress'
    },
    copyright: {
      control: 'text',
      description: 'copyright text'
    },
    content: {
      description: 'footer content'
    },
    socialMedia: {
      description: 'object to display social media icons'
    },
    brandIcon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
    }
  }
} as Meta;

const footerSections: FooterSections[] = [
  {
    title: 'title 1',
    link: [
      { label: 'link 1', url: 'link 1' },
      { label: 'link 2', url: 'link 2' },
      { label: 'link 3', url: 'link 3' }
    ]
  },
  {
    title: 'title 2',
    link: [
      { label: 'link 1', url: 'link 1' },
      { label: 'link 2', url: 'link 2' },
      { label: 'link 3', url: 'link 3' }
    ]
  },
  {
    title: 'title 3',
    link: [
      { label: 'link 1', url: 'link 1' },
      { label: 'link 2', url: 'link 2' },
      { label: 'link 3', url: 'link 3' }
    ]
  },
  {
    title: 'title 4',
    link: [
      { label: 'link 1', url: 'link 1' },
      { label: 'link 2', url: 'link 2' },
      { label: 'link 3', url: 'link 3' }
    ]
  }
];

const socialMediaIcons: FooterSocialMedia[] = [
  {
    name: FooterSocialMediaIconName.AppFacebook,
    url: 'facebook'
  },
  {
    name: FooterSocialMediaIconName.AppInstagram,
    url: 'instagram'
  },
  {
    name: FooterSocialMediaIconName.AppLinkedin,
    url: 'linkedin'
  }
];

const Template: Story<FooterProps> = (args) => <FooterComponent {...args} />;

export const Footer = Template.bind({});
Footer.args = {
  brandInfo: 'Carlsberg Breweries A/S J.C. Jacobsens Gade 1, 1799 Copenhagen V Denmark',
  content: footerSections,
  socialMedia: socialMediaIcons,
  copyright: '© Powered by Carlsberg Group'
};
