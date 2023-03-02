import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Hero as HeroComponent } from './Hero';
import { HeroLayout, HeroProps } from './Hero.types';

export default {
  title: 'Layout/Hero',
  component: HeroComponent,
  parameters: {
    importObject: 'Hero',
    importPath: '@carlsberggroup/malty.atoms.Hero',
    variants: ['negative', 'half', 'third', 'reverse']
  },
  argTypes: {
    layout: {
      control: {
        type: 'select'
      },
      options: Object.values(HeroLayout),
      description: 'Picks the layout of the Content and Image'
    },
    reverse: {
      control: 'boolean',
      description: 'Reverses the position of the Image and the Content'
    },
    negative: {
      control: 'boolean',
      description: 'Changes the colors to be a black background and lighter elements'
    },
    title: {
      control: 'text',
      description: 'Hero title'
    },
    description: {
      control: 'text',
      description: 'Hero description'
    },
    label: {
      control: '',
      description: `An object containing the props for a Pill Label as such "label?:
    | {
        text: string;
        icon: IconName;
        color: PillColor
        size: PillSize;
      }[]" or any html or JSX element `
    },
    actions: {
      control: '',
      description: `An array of maximum 2 actions structured as such "actions?:
    | {
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
        key?: string;
      }[]" or any html or JSX element `
    },
    imageSrc: {
      control: 'text',
      description: 'Hero Image URL'
    },
    imageHeight: {
      control: 'text',
      description: 'Hero Image Size override (in pixels)'
    }
  }
} as Meta;

const Template: Story<HeroProps> = (args) => {
  return <HeroComponent {...args} />;
};

export const Hero = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'negative':
    Hero.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: true,
      layout: HeroLayout.Full,
      label: {
        text: 'Label'
      },
      actions: [
        {
          variant: ButtonStyle.Primary,
          label: 'Primary',
          onClick: () => alert('primary button pressed')
        },
        {
          variant: ButtonStyle.Secondary,
          label: 'Secondary',
          onClick: () => alert('secondary button pressed')
        }
      ]
    };
    break;
  case 'half':
    Hero.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: HeroLayout.Half,
      label: {
        text: 'Label'
      },
      actions: [
        {
          variant: ButtonStyle.Primary,
          label: 'Primary',
          onClick: () => alert('primary button pressed')
        },
        {
          variant: ButtonStyle.Secondary,
          label: 'Secondary',
          onClick: () => alert('secondary button pressed')
        }
      ]
    };
    break;
  case 'third':
    Hero.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: HeroLayout.Third,
      label: {
        text: 'Label'
      },
      actions: [
        {
          variant: ButtonStyle.Primary,
          label: 'Primary',
          onClick: () => alert('primary button pressed')
        },
        {
          variant: ButtonStyle.Secondary,
          label: 'Secondary',
          onClick: () => alert('secondary button pressed')
        }
      ]
    };
    break;
  case 'reverse':
    Hero.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: true,
      negative: false,
      layout: HeroLayout.Half,
      label: {
        text: 'Label'
      },
      actions: [
        {
          variant: ButtonStyle.Primary,
          label: 'Primary',
          onClick: () => alert('primary button pressed')
        },
        {
          variant: ButtonStyle.Secondary,
          label: 'Secondary',
          onClick: () => alert('secondary button pressed')
        }
      ]
    };
    break;
  default:
    Hero.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: HeroLayout.Full,
      label: {
        text: 'Label'
      },
      actions: [
        {
          variant: ButtonStyle.Primary,
          label: 'Primary',
          onClick: () => alert('primary button pressed')
        },
        {
          variant: ButtonStyle.Secondary,
          label: 'Secondary',
          onClick: () => alert('secondary button pressed')
        }
      ]
    };
    break;
}
