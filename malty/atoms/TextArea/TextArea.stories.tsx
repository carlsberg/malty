import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea.types';

const TextAreaComponent = (props: TextAreaProps) => {
  const { value } = props;
  const [stateValue, setStateValue] = useState(value);

  return <TextArea {...props} value={stateValue} onValueChange={setStateValue} />;
};

const meta: Meta<TextAreaProps> = {
  component: TextArea,
  title: 'Forms/Text Area',
  parameters: {
    importObject: 'TextArea',
    importPath: '@carlsberggroup/malty.atoms.text-area'
  },
  render: (args) => <TextAreaComponent {...args} />,
  argTypes: {
    label: {
      description: 'Label for the input, goes above.',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the input field, when empty.',
      control: 'text'
    },
    resize: {
      control: 'boolean',
      description: 'Textarea state, resizable textarea'
    },
    disabled: {
      control: 'boolean',
      description: 'Textarea state, disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Textarea state, readOnly'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    hint: {
      description: 'helper message to be displayed',
      control: 'text'
    },
    maxLength: {
      description: 'Maximum characters of textarea ',
      control: 'number'
    },
    value: {
      description: 'Default value of textarea',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when textarea state changes'
    },
    dataTestId: {
      control: 'text',
      description: 'select data-testid'
    },
    required: {
      control: 'boolean',
      description: 'Makes the textarea input required to fill'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<TextAreaProps>;

export const Base: Story = {
  args: {
    label: 'Label',
    maxLength: 20,
    resize: false,
    placeholder: 'Placeholder',
    disabled: false,
    error: '',
    value: '',
    hint: 'hint text',
    readOnly: false,
    dataTestId: 'Textarea',
    required: false
  }
};

export default meta;
