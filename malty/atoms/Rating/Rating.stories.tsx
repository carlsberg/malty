import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { RatingProps } from './Rating.types';

const meta: Meta<RatingProps> = {
  title: 'Forms/Rating',
  component: Rating,
  parameters: {
    importObject: 'Rating',
    importPath: '@carlsberg/malty.atoms.rating'
  },
  argTypes: {
    name: {
      description: 'Name of the rating component',
      control: 'text'
    },
    label: {
      description: 'Label of the rating component',
      control: 'text'
    },
    value: {
      description: 'Current value of the rating component',
      control: 'none',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    },
    readOnly: {
      table: {
        category: 'State',
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean',
      description: 'Make readOnly the rating component. It is not a required property'
    },
    disabled: {
      table: {
        category: 'State',
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean',
      description: 'Make disable the rating component. It is not a required property'
    },
    totalReview: {
      description: 'Total review of the rating component',
      control: {
        type: 'number',
        min: 0
      }
    },
    onStarClick: {
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Rating data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<RatingProps>;

export const Base: Story = {
  args: {
    name: 'rating1',
    label: 'How was your order experience?',
    value: 0,
    dataTestId: 'rating',
    disabled: false,
    readOnly: false
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export const ReadOnly: Story = {
  args: {
    ...Base.args,
    readOnly: true
  }
};

export default meta;
