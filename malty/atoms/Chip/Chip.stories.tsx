import { Alert } from '@carlsberggroup/malty.icons.alert';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Chip as ChipComponent } from './Chip';
import { ChipProps, ChipSize } from './Chip.types';

export default {
  title: 'Forms/Chip',
  component: ChipComponent,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberggroup/malty.atoms.chip',
    variants: ['button', 'icon', 'selected', 'disabled']
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
      description: 'label for the chip'
    },
    size: {
      description: 'Chip size. Options are',
      options: Object.values(ChipSize),
      table: {
        defaultValue: {
          summary: 'ChipSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },
    selected: {
      control: 'none',
      description: 'state of the component, selected or not selected'
    },
    showAction: {
      control: 'boolean',
      description: 'Displays add button if true'
    },
    onChange: {
      description: 'Function to be executed when Chip state changes'
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable chip'
    },
    readOnly: {
      control: 'boolean',
      description: 'readOnly chip'
    },
    dataTestId: {
      control: 'text',
      description: 'Chip data-testid'
    },
    ...generateStorybookSpacing()
  }
};

const Template: Story<ChipProps> = (args) => {
  const [stateChecked, setStateChecked] = useState(false);

  return <ChipComponent {...args} selected={stateChecked} onChange={() => setStateChecked(!stateChecked)} />;
};

export const Chip = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'button':
    Chip.args = {
      label: 'Label',
      selected: false,
      showAction: true
    };
    break;
  case 'icon':
    Chip.args = {
      label: 'Label',
      selected: false,
      icon: <Alert />
    };
    break;
  case 'selected':
    Chip.args = {
      label: 'Label',
      selected: true,
      showAction: false
    };
    break;
  case 'disabled':
    Chip.args = {
      label: 'Label',
      selected: true,
      showAction: false,
      disabled: true
    };
    break;
  default:
    Chip.args = {
      label: 'Label',
      selected: false,
      showAction: false
    };
    break;
}
