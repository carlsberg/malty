import { allIconsStoryOptions } from '@carlsberggbs/malty.utils.all-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterProps, FooterSections, FooterSocialMedia, FooterSocialMediaIconName } from './Footer.types';

const meta: Meta<FooterProps> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    importObject: 'Footer',
    importPath: '@carlsberggbs/malty.molecules.footer'
  },
  argTypes: {
    brandInfo: {
      control: 'text',
      description: 'Adress'
    },
    copyright: {
      control: 'text',
      description: 'Copyright text'
    },
    content: {
      description: 'Footer content'
    },
    socialMedia: {
      description: 'Object to display social media icons'
    },
    brandIcon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
    },
    dataQaId: {
      control: 'text',
      description: 'Footer data-testid'
    }
  }
};

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

type Story = StoryObj<FooterProps>;

export const Base: Story = {
  args: {
    brandInfo: 'Carlsberg Breweries A/S J.C. Jacobsens Gade 1, 1799 Copenhagen V Denmark',
    content: footerSections,
    socialMedia: socialMediaIcons,
    copyright: '© Powered by Carlsberg Group',
    dataQaId: 'footer'
  }
};

export default meta;
