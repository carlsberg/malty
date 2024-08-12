import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from '.';

const meta: Meta<LabelProps> = {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    importObject: 'Label',
    importPath: '@carlsberg/malty.atoms.label'
  },
  argTypes: {
    label: {
      description: 'Text for the label',
      control: 'text'
    },
    required: {
      table: {
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean'
    },
    disabled: {
      description: 'Makes the label disabled',
      table: {
        category: 'State',
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean'
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the target input component'
    },
    dataTestId: {
      control: 'text',
      description: 'Label data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<LabelProps>;

export const Base: Story = {
  args: {
    label: 'Wrapped checkbox label',
    htmlFor: 'string',
    dataTestId: 'label'
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export default meta;
