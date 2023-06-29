import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Story } from '@storybook/react';
import React from 'react';
import { Hero as HeroComponent } from './Hero';
import { ActionButtonProps, HeroProps } from './Hero.types';

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
  imageSrc: 'https://picsum.photos/1400/800'
};

switch (variant) {
  case HeroVariants.Required:
    Hero.args = {
      ...requiredProps
    };
    break;
  case HeroVariants.Actions: {
    const actions: ActionButtonProps[] = [
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
    ];

    Hero.args = {
      ...requiredProps,
      actions
    };
    break;
  }
  case HeroVariants.Scroll:
    Hero.args = {
      ...requiredProps,
      scrollText: 'Scroll to know more'
    };
    break;
  default: {
    const actions: ActionButtonProps[] = [
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
    ];

    Hero.args = {
      ...requiredProps,
      actions,
      scrollText: 'Scroll to know more'
    };
    break;
  }
}
