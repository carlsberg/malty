import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Banner } from './Banner';
import { ActionButtonProps, BannerLayout, BannerProps } from './Banner.types';

const meta: Meta<BannerProps> = {
  component: Banner,
  title: 'Layout/Banner',
  parameters: {
    importObject: 'Banner',
    importPath: '@carlsberggroup/malty.molecules.banner'
  },
  render: (args) => <Banner {...args} />,
  argTypes: {
    layout: {
      control: 'select',
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
        type: PillType
        size: PillSize;
      }[]" or any html or JSX element `
    },
    actions: {
      control: 'object',
      description:
        'An array of maximum 2 actions structured as such "actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;"'
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
};

type Story = StoryObj<BannerProps>;

const actions: ActionButtonProps[] = [
  {
    key: 'primary',
    style: ButtonStyle.Primary,
    text: 'Primary',
    onClick: () => alert('primary button pressed')
  },
  {
    key: 'secondary',
    style: ButtonStyle.Secondary,
    text: 'Secondary',
    onClick: () => alert('secondary button pressed')
  }
];

export const Base: Story = {
  args: {
    title: 'Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageSrc: 'https://picsum.photos/id/785/1400/800',
    reverse: false,
    negative: false,
    layout: BannerLayout.Full,
    label: {
      text: 'Label'
    },
    actions
  }
};

export const Negative: Story = {
  args: {
    ...Base.args,
    negative: true
  }
};

export const Half: Story = {
  args: {
    ...Base.args,
    layout: BannerLayout.Half
  }
};

export const Third: Story = {
  args: {
    ...Base.args,
    layout: BannerLayout.Third
  }
};

export const Reverse: Story = {
  args: {
    ...Base.args,
    layout: BannerLayout.Half,
    reverse: true
  }
};

export default meta;
