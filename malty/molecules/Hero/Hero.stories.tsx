import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { ActionButtonProps, HeroProps } from './Hero.types';

const meta: Meta<HeroProps> = {
  title: 'Layout/Hero',
  component: Hero,
  parameters: {
    importObject: 'Hero',
    importPath: '@carlsberggroup/malty.molecules.hero'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the hero'
    },
    titleAs: {
      control: 'text',
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags"
    },
    description: {
      control: 'text',
      description: 'Description of the hero'
    },
    descriptionAs: {
      control: 'text',
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags"
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
        'An array of maximum 2 actions structured as such "actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;"',
      table: {
        category: 'Events'
      }
    },
    scrollText: {
      control: 'text',
      description: 'The text for the scroll, if nothing is passed then the scroll will not be displayed'
    },
    height: {
      control: 'text',
      description: 'This sets the height value dynamically, the min-height will always be 80vh as default',
      table: {
        category: 'Styling'
      }
    }
  }
};

type Story = StoryObj<HeroProps>;

const actions: ActionButtonProps[] = [
  {
    key: 'primary',
    negative: false,
    color: ButtonColor.DigitalBlack,
    style: ButtonStyle.Primary,
    text: 'I want to know more',
    onClick: () => alert('First button pressed!')
  },
  {
    key: 'secondary',
    negative: false,
    color: ButtonColor.DigitalBlack,
    style: ButtonStyle.Secondary,
    text: 'I am ok',
    onClick: () => alert('Second button pressed!')
  }
];

export const Base: Story = {
  args: {
    title: 'Welcome to Carlsberg Online',
    description: 'Now you can order all your favourite products on your smartphone or computer within minutes.',
    imageSrc: 'https://placehold.co/1400x800',
    dataTestId: 'hero'
  }
};

export const Scroll: Story = {
  args: {
    ...Base.args,
    scrollText: 'Scroll to know more'
  }
};

export const Actions: Story = {
  args: {
    ...Base.args,
    actions
  }
};

export default meta;
