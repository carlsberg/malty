import { ButtonStyle } from '@carlsberg/malty.atoms.button';
import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { ActionButtonProps, BannerLayout, BannerProps } from './Banner.types';

const meta: Meta<BannerProps> = {
  title: 'Layout/Banner',
  component: Banner,
  parameters: {
    importObject: 'Banner',
    importPath: '@carlsberg/malty.molecules.banner'
  },
  argTypes: {
    layout: {
      control: 'select',
      options: Object.values(BannerLayout),
      description: 'Picks the layout of the Content and Image',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: BannerLayout.Full
        }
      }
    },
    reverse: {
      control: 'boolean',
      description: 'Reverses the position of the Image and the Content',
      table: {
        category: 'Styling'
      }
    },
    negative: {
      control: 'boolean',
      description: 'Changes the colors to be a black background and lighter elements',
      table: {
        category: 'Styling'
      }
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
        'An array of maximum 2 actions structured as such "actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;"',
      table: {
        category: 'Events'
      }
    },
    imageSrc: {
      control: 'text',
      description: 'Banner Image URL'
    },
    imageHeight: {
      control: 'text',
      description: 'Banner Image Size override (in pixels)',
      table: {
        category: 'Styling'
      }
    },
    ...generateStorybookSpacing()
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
    dataTestId: 'banner-component',
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
