import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Banner as BannerComponent } from './Banner';
import { BannerLayout, BannerProps } from './Banner.types';

enum BannerVariants {
  Negative = 'negative',
  Half = 'half',
  Third = 'third',
  Reverse = 'reverse'
}

export default {
  title: 'Layout/Banner',
  component: BannerComponent,
  parameters: {
    importObject: 'Banner',
    importPath: '@carlsberggroup/malty.atoms.banner',
    variants: Object.values(BannerVariants)
  },
  argTypes: {
    layout: {
      control: {
        type: 'select'
      },
      options: Object.values(BannerLayout),
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
      description: 'Banner title'
    },
    description: {
      control: 'text',
      description: 'Banner description'
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
      description: 'Banner Image URL'
    },
    imageHeight: {
      control: 'text',
      description: 'Banner Image Size override (in pixels)'
    }
  }
} as Meta;

const Template: Story<BannerProps> = (args) => {
  return <BannerComponent {...args} />;
};

export const Banner = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case BannerVariants.Negative:
    Banner.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: true,
      layout: BannerLayout.Full,
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
  case BannerVariants.Half:
    Banner.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: BannerLayout.Half,
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
  case BannerVariants.Third:
    Banner.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: BannerLayout.Third,
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
  case BannerVariants.Reverse:
    Banner.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: true,
      negative: false,
      layout: BannerLayout.Half,
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
    Banner.args = {
      title: 'Headline',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'https://picsum.photos/id/785/1400/800',
      reverse: false,
      negative: false,
      layout: BannerLayout.Full,
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
