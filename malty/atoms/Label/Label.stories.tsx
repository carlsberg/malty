import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Label, LabelProps } from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          '***Note:*** *Input components in this document are not part of the label component, and are used for demo purposes only.*'
      }
    }
  },
  argTypes: {
    text: { control: 'text' },
    checkbox: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: 'Alignment of the text vs. the checkbox component',
      control: 'boolean'
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    block: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: 'CSS display: block vs. inline-block',
      control: 'boolean'
    },
    htmlFor: {
      control: false,
      description: 'ID of the target input component'
    }
  }
} as Meta;

const NestedTemplateCheckbox: Story<LabelProps> = (args) => (
  <Label {...args}>
    <input type="checkbox" />
  </Label>
);

const ByIdTemplateCheckbox: Story<LabelProps> = (args) => (
  <>
    <input id="test_checkbox" type="checkbox" />
    <Label htmlFor="test_checkbox" {...args} />
  </>
);

const NestedTemplateInput: Story<LabelProps> = (args) => (
  <Label {...args}>
    <input type="text" />
  </Label>
);

export const NestedInput = NestedTemplateInput.bind({});
NestedInput.args = {
  text: 'Wrapped label'
};

export const ByIdCheckbox = ByIdTemplateCheckbox.bind({});
ByIdCheckbox.args = {
  text: 'Stand-alone label by ID',
  checkbox: true
};

export const NestedCheckbox = NestedTemplateCheckbox.bind({});
NestedCheckbox.args = {
  text: 'Wrapped checkbox label',
  checkbox: true
};
