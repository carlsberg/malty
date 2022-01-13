import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Label as LabelComponent, LabelProps } from '.';

export default {
  title: 'Atoms/Label',
  component: LabelComponent,
  parameters: {
    importObject: 'Label',
    importPath: '@carlsberggroup/malty.atoms.label',
    docs: {
      description: {
        component:
          '***Note:*** *Input components in this document are not part of the label component, and are used for demo purposes only.*'
      }
    }
  },
  argTypes: {
    text: {
      description: 'Text for the label',
      control: 'text'
    },
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

const NestedTemplateInput: Story<LabelProps> = (args) => (
  <LabelComponent {...args}>
    <input type="text" />
  </LabelComponent>
);

const ByIdTemplateCheckbox: Story<LabelProps> = (args) => (
  <>
    <input id="test_checkbox" type="checkbox" />
    <LabelComponent htmlFor="test_checkbox" {...args} />
  </>
);

const NestedTemplateCheckbox: Story<LabelProps> = (args) => (
  <LabelComponent {...args}>
    <input type="checkbox" />
  </LabelComponent>
);

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

let LabelEl;

switch (variant) {
  case 'wrapped':
    LabelEl = NestedTemplateInput.bind({});
    LabelEl.args = {
      text: 'Wrapped label'
    };
    break;

  case 'standalone':
    LabelEl = ByIdTemplateCheckbox.bind({});
    LabelEl.args = {
      text: 'Stand-alone by ID',
      checkbox: true
    };
    break;

  default:
    LabelEl = NestedTemplateCheckbox.bind({});
    LabelEl.args = {
      text: 'Wrapped checkbox label',
      checkbox: true
    };
    break;
}

export const Label = LabelEl;
