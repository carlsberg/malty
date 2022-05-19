import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { Chip as ChipComponent } from './Chip';
import { ChipProps, ChipSize } from './Chip.types';

export default {
  title: 'Forms/Chip',
  component: ChipComponent,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberggroup/malty.atoms.chip'
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
      control: 'boolean',
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
      description: 'When selected, Chip will show selected icon',
      options: Object.values({ undefined, ...IconName }),

      control: {
        type: 'select'
      }
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
    }
  }
};

const Template: Story<ChipProps> = (args) => <ChipComponent {...args} />;

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
      icon: IconName.Information
    };
    break;
  case 'selected':
    Chip.args = {
      label: 'Label',
      selected: true,
      showAction: false
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
