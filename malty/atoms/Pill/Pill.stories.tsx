import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pill as PillComponent } from './Pill';
import { PillColor, PillProps, PillSize } from './Pill.types';

export default {
  title: 'Information/Pill',
  component: PillComponent,
  parameters: {
    importObject: 'Pill',
    importPath: '@carlsberggroup/malty.atoms.pill',
    variants: ['text', 'icon', 'combo']
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Pill content text.'
    },
    size: {
      description: 'Pill size, options below.',
      options: Object.values(PillSize),
      control: {
        type: 'select'
      },
      table: {
        defaultValue: {
          summary: 'PillSize.Medium'
        }
      }
    },
    color: {
      description: 'Pill colors, from design predefined colors, as follows.',
      options: Object.keys(PillColor),
      mapping: PillColor,
      control: {
        type: 'select',
        label: Object.values(PillColor)
      },
      table: {
        defaultValue: {
          summary: 'PillColor.Closed'
        }
      }
    },
    icon: {
      description: 'Icon to be displayed',
      options: Object.keys({ undefined, ...IconName }),
      mapping: { undefined, ...IconName },
      control: {
        type: 'select',
        label: Object.values({ undefined, ...IconName })
      },
      table: {
        defaultValue: {
          summary: 'IconName.CarlsbergFilled'
        }
      }
    },
    badgeMode: {
      description: 'Decreases paddings and allows for a circled look as much as possible',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } }
    },
    dataTestId: {
      control: 'text',
      description: 'Pill data-testid'
    }
  }
} as Meta;

const Template: Story<PillProps> = (args: PillProps) => <PillComponent {...args} />;

let PillEl;

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'icon':
    PillEl = Template.bind({});
    PillEl.args = {
      icon: IconName.CarlsbergFilled,
      color: PillColor.Success,
      size: PillSize.Medium,
      badgeMode: false
    };
    break;

  case 'text':
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'Text',
      color: PillColor.Fail,
      size: PillSize.Medium,
      badgeMode: false
    };
    break;

  case 'badge':
    PillEl = Template.bind({});
    PillEl.args = {
      text: '9',
      color: PillColor.Success,
      size: PillSize.ExtraSmall,
      badgeMode: true
    };
    break;

  default:
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'Text',
      icon: IconName.CarlsbergFilled,
      color: PillColor.Primary,
      size: PillSize.Medium,
      badgeMode: false
    };
    break;
}

export const Pill = PillEl;
