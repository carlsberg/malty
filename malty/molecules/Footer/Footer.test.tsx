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
  }
];
describe('footer', () => {
  it('renders with brand info', () => {
    render(<Footer brandInfo="brand info" content={footerSections} socialMedia={socialMediaIcons} />);
    const brandInfo = screen.getByText('brand info');
    expect(brandInfo).toBeDefined();
  });
  it('renders with copyright', () => {
    render(<Footer copyright="copyright" content={footerSections} socialMedia={socialMediaIcons} />);
    const copyright = screen.getByText('copyright');
    expect(copyright).toBeDefined();
  });
  it('renders with socialmedia icon', () => {
    render(<Footer copyright="copyright" dataQaId="footer" content={footerSections} socialMedia={socialMediaIcons} />);
    const socialIcon = screen.getByTestId(`footer-social-media-${FooterSocialMediaIconName.AppFacebook}`);
    expect(socialIcon).toBeDefined();
  });
  it('renders with links', () => {
    render(<Footer dataQaId="footer" content={footerSections} socialMedia={socialMediaIcons} />);
    const clusterTitle = screen.getByTestId(`footer-cluster-${footerSections[0].title}`);
    const link = screen.getByTestId(`footer-link-${footerSections[0].link[0].label}`);
    expect(clusterTitle).toBeDefined();
    expect(link).toBeDefined();
  });
});
