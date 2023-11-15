import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Footer } from './Footer';
import { FooterSections, FooterSocialMedia, FooterSocialMediaIconName } from './Footer.types';

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
      { label: 'link 4', url: 'link 1' },
      { label: 'link 5', url: 'link 2' },
      { label: 'link 6', url: 'link 3' }
    ]
  },
  {
    title: 'title 3',
    link: [
      { label: 'link 7', url: 'link 1' },
      { label: 'link 8', url: 'link 2' },
      { label: 'link 9', url: 'link 3' }
    ]
  },
  {
    title: 'title 4',
    link: [
      { label: 'link 10', url: 'link 1' },
      { label: 'link 11', url: 'link 2' },
      { label: 'link 12', url: 'link 3' }
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
  },
  {
    name: FooterSocialMediaIconName.AppDropbox,
    url: 'dropbox'
  },
  {
    name: FooterSocialMediaIconName.AppGithub,
    url: 'github'
  },
  {
    name: FooterSocialMediaIconName.AppSkype,
    url: 'skype'
  }
];
describe('footer', () => {
  it('should render with brand info', () => {
    render(<Footer brandInfo="brand info" content={footerSections} socialMedia={socialMediaIcons} />);

    const brandInfo = screen.getByText('brand info');

    expect(brandInfo).toBeInTheDocument();
  });

  it('should render with copyright', () => {
    render(<Footer copyright="copyright" content={footerSections} socialMedia={socialMediaIcons} />);

    const copyright = screen.getByText('copyright');

    expect(copyright).toBeInTheDocument();
  });

  it('should render with socialmedia icon', () => {
    render(<Footer copyright="copyright" dataQaId="footer" content={footerSections} socialMedia={socialMediaIcons} />);

    const fbIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppFacebook}`);
    const instaIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppInstagram}`);
    const linkedinIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppLinkedin}`);
    const dropboxIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppDropbox}`);
    const githubIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppGithub}`);
    const skypeIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppSkype}`);

    expect(fbIcon).toBeInTheDocument();
    expect(instaIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();

    expect(dropboxIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(skypeIcon).toBeInTheDocument();
  });

  it('should render with links', () => {
    render(<Footer dataQaId="footer" content={footerSections} socialMedia={socialMediaIcons} />);

    const clusterTitle = screen.getByTestId(`footer-cluster-title 1`);
    const link = screen.getByText(`link 1`);

    expect(clusterTitle).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('should render with the correct data test id', () => {
    render(<Footer dataQaId="footer" content={footerSections} socialMedia={socialMediaIcons} />);

    const wrapper = screen.getByTestId('footer');

    expect(wrapper).toBeInTheDocument();
  });
});
