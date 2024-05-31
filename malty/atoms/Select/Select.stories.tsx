import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Select, SelectOptionsType, SelectProps, SelectSize, SelectType } from '.';
import { SelectPosition } from './Select.types';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
`;

const meta: Meta<SelectProps> = {
  title: 'Forms/Select',
  component: Select,
  render: (args) => {
    return (
      <StyledContainer>
        <Select {...args} />
      </StyledContainer>
    );
  },
  parameters: {
    importObject: 'Select',
    importPath: '@carlsberggbs/malty.atoms.select'
  },
  argTypes: {
    label: {
      description: 'Label for the Select component',
      control: 'text'
    },
    selectAllLabel: {
      description: 'Label for the Select all action',
      control: 'text'
    },
    clearAllLabel: {
      description: 'Label for the Clear all action',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the Select field, when empty',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present',
      control: 'text'
    },
    hint: {
      description: 'Helper message to be displayed',
      control: 'text'
    },
    size: {
      description: 'Select component size.',
      options: Object.values(SelectSize),
      control: 'radio',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: SelectSize.Medium
        }
      }
    },
    type: {
      description: 'Type of select component',
      options: Object.values(SelectType),
      control: 'select'
    },
    disabled: {
      description: 'Select state, disabled',
      control: 'boolean',
      table: {
        category: 'State'
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'Select state, readOnly',
      table: {
        category: 'State'
      }
    },
    defaultValue: {
      description: 'Initial selected option(s)'
    },
    options: {
      description:
        'This is the collection of possible options on the select, keep in mind that value will be evaluated as case-sensitive'
    },
    multiple: {
      description: 'Select state, when active allows for multi selection',
      control: 'boolean'
    },
    search: {
      description: 'Select state, when active allows for multi selection',
      control: 'boolean'
    },
    selectionText: {
      description: 'Text to display when multiple options are selected. Ex. 3 "options selected" ',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when an option is selected or unselected',
      table: {
        category: 'Events'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Select data-testid'
    },
    required: {
      description: 'Makes the select visually mandatory to be filled when not in inline version',
      control: 'boolean'
    },
    optionsZIndex: {
      control: 'number',
      description: 'Controls the z-index of the options wrapper',
      table: {
        category: 'Styling'
      }
    },
    value: {
      description: 'Selected option(s)',
      control: false
    },
    clearAllOption: {
      description: 'Show option that allows the user to clear the current selection',
      control: 'boolean'
    },
    alignPosition: {
      description: '',
      options: Object.values(SelectPosition),
      control: 'select',
      table: {
        category: 'Styling'
      },
      if: { arg: 'type', eq: SelectType.Inline }
    },
    onBlur: {
      description: 'Function to be executed when the select loses focus',
      control: false,
      table: {
        category: 'Events'
      }
    },
    ...generateStorybookSpacing()
  }
};

const testOptions: SelectOptionsType[] = [
  {
    value: 'value 1',
    name: 'name 1'
  },
  {
    value: 'value 2',
    name: 'name 2'
  },
  {
    value: 'value 3',
    name: 'name 3'
  },
  {
    value: 'value 4',
    name: 'name 4'
  },
  {
    value: 'value 5',
    name: 'name 5'
  }
];

type Story = StoryObj<SelectProps>;

export const Base: Story = {
  args: {
    options: testOptions,
    size: SelectSize.Medium,
    label: 'Label',
    type: SelectType.Default,
    hint: 'hint text',
    disabled: false,
    placeholder: 'Placeholder',
    defaultValue: [testOptions[0]],
    selectionText: 'options selected',
    readOnly: false,
    required: false,
    optionsZIndex: 2,
    onValueChange: action('onValueChange'),
    dataTestId: 'select',
    clearAllOption: true
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

export const Inline: Story = {
  args: {
    ...Base.args,
    type: SelectType.Inline
  }
};

export default meta;
