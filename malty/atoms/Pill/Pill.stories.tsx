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
    importPath: '@carlsberggroup/malty.atoms.pill'
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
      mapping: IconName,
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
    isRounded: {
      control: 'boolean',
      description: 'Is pill to have rounded corners?'
    },
    onClick: {
      table: {
        disable: true
      }
    },
    onRemoveClick: {
      options: Object.values([false, () => null]),
      defaultValue: false,
      control: {
        type: 'radio'
      },
      description: 'Function to run when pill is removed.'
    }
  }
} as Meta;

const Template: Story<PillProps> = ({ text, icon, color, isRounded, onRemoveClick, onClick, size }: PillProps) => (
  <PillComponent
    text={text}
    onRemoveClick={onRemoveClick}
    onClick={onClick}
    icon={icon}
    color={color}
    isRounded={isRounded}
    size={size}
  />
);

const TemplateRemovable: Story<PillProps> = ({
  text,
  icon,
  color,
  isRounded,
  onRemoveClick,
  onClick,
  size
}: PillProps) => (
  <Pill
    text={text}
    onRemoveClick={onRemoveClick}
    onClick={onClick}
    icon={icon}
    color={color}
    isRounded={isRounded}
    size={size}
  />
);

let PillEl;

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'icon':
    PillEl = Template.bind({});
    PillEl.args = {
      icon: IconName.CarlsbergFilled,
      color: PillColor.New,
      isRounded: true,
      size: PillSize.Medium,
      onRemoveClick: false
    };
    break;

  case 'iconlabel':
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'P',
      color: PillColor.Archive,
      isRounded: false,
      size: PillSize.Medium,
      onRemoveClick: false
    };
    break;

  case 'removable':
    PillEl = TemplateRemovable.bind({});
    PillEl.args = {
      text: 'Removeable',
      color: PillColor.Hold,
      isRounded: false,
      size: PillSize.Medium,
      onRemoveClick: () => null
    };
    break;

  default:
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'Text',
      icon: IconName.CarlsbergFilled,
      color: PillColor.Close,
      isRounded: true,
      size: PillSize.Medium,
      onRemoveClick: false
    };
    break;
}

export const Pill = PillEl;
