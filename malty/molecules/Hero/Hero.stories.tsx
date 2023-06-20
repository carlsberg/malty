import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Story } from '@storybook/react';
import React from 'react';
import { Hero as HeroComponent } from './Hero';
import { HeroProps } from './Hero.types';

enum HeroVariants {
  Required = 'required',
  Actions = 'actions',
  Scroll = 'scroll',
  Default = 'default'
}

export default {
  title: 'Layout/Hero',
  component: HeroComponent,
  parameters: {
    importObject: 'Hero',
    importPath: '@carlsberggroup/malty.molecules.hero',
    variants: Object.values(HeroVariants)
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the hero'
    },
    description: {
      control: 'text',
      description: 'Description of the hero'
    },
    imageSrc: {
      control: 'text',
      description: 'Hero background Image URL'
    },
    dataTestId: {
      control: 'text',
      description: 'Hero data-testid'
    },
    actions: {
      control: 'object',
      desciption:
        'An array of maximum 2 actions structured as such "actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;"'
    },
    scrollText: {
      control: 'text',
      description: 'The text for the scroll, if nothing is passed then the scroll will not be displayed'
    },
    height: {
      control: 'text',
      description: 'This sets the height value dynamically, the min-height will always be 80vh as default'
    }
  }
};

const Template: Story<HeroProps> = (args) => {
  return <HeroComponent {...args} />;
};

export const Hero = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

const requiredProps: HeroProps = {
  title: 'Welcome to Carlsberg Online',
  description: 'Now you can order all your favourite products on your smartphone or computer within minutes.',
  imageSrc:
    'https://s3-alpha-sig.figma.com/img/1a8e/2a97/368bfc9d97adcbd3d02f0159e7692a8e?Expires=1687737600&Signature=BuALw8tE~LB0L6bXFJmvn~rTaFV56SCTpZsWch0c0Ogi75FXkfmaRiHX3wju3ACFut320tr73q4FIAe8y07AT3hH00dAPYJvIPIOXQ~TXP6ALj5zQQuLfvOJwSQwCtuUngrl~-0x2HHCN~8SFDcDVfkwxD-vyR1tBAHByh0jTtk8M1bipMX~ds1sVEQPbWxzJMFAzlrILxW16h5yDUBiWKF6WnpJTmvZh~luJyRwV9vKm5BC8rs4sA-HsBanSLdnbQXLQM37fyAGtsj5PVf7~1x11zaHUja2yhejXN~efkZId7csOqtz6rpuN2NRAp1DkWA36hZBTBoT573NaKSOqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
};

switch (variant) {
  case HeroVariants.Required:
    Hero.args = {
      ...requiredProps
    };
    break;
  case HeroVariants.Actions:
    Hero.args = {
      ...requiredProps,
      actions: [
        {
          key: 'primary',
          style: ButtonStyle.Primary,
          text: 'I want to know more',
          onClick: () => alert('First button pressed!')
        },
        {
          key: 'secondary',
          style: ButtonStyle.Secondary,
          text: 'I am ok',
          onClick: () => alert('Second button pressed!')
        }
      ]
    };
    break;
  case HeroVariants.Scroll:
    Hero.args = {
      ...requiredProps,
      scrollText: 'Scroll to know more'
    };
    break;
  default:
    Hero.args = {
      ...requiredProps,
      actions: [
        {
          key: 'primary',
          negative: true,
          color: ButtonColor.DigitalBlack,
          style: ButtonStyle.Primary,
          text: 'I want to know more',
          onClick: () => alert('First button pressed!')
        },
        {
          key: 'secondary',
          negative: true,
          color: ButtonColor.DigitalBlack,
          style: ButtonStyle.Secondary,
          text: 'I am ok',
          onClick: () => alert('Second button pressed!')
        }
      ],
      scrollText: 'Scroll to know more'
    };
    break;
}
