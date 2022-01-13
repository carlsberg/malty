import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pill as PillComponent } from './Pill';
import { PillColor, PillProps, PillSizeType } from './Pill.types';

export default {
  title: 'Atoms/Pill',
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
      options: Object.values(PillSizeType),
      control: {
        type: 'select'
      },
      description: 'Pill size, options below.',
      table: {
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    color: {
      options: Object.values(PillColor),
      control: {
        type: 'select'
      },
      description: 'Pill colors, from design predefined colors, as follows.',
      table: {
        defaultValue: {
          summary: 'closed'
        }
      }
    },
    icon: {
      options: Object.values({ undefined, ...IconNamesTypes }),
      control: {
        type: 'select'
      },
      description: 'Icon to be displayed',
      table: {
        defaultValue: {
          summary: false
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
      icon: IconNamesTypes.CarlsbergFilled,
      color: PillColor.New,
      isRounded: true,
      size: PillSizeType.Medium,
      onRemoveClick: false
    };
    break;

  case 'iconlabel':
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'P',
      color: PillColor.Archive,
      isRounded: false,
      size: PillSizeType.Medium,
      onRemoveClick: false
    };
    break;

  case 'removable':
    PillEl = TemplateRemovable.bind({});
    PillEl.args = {
      text: 'Removeable',
      color: PillColor.Hold,
      isRounded: false,
      size: PillSizeType.Medium,
      onRemoveClick: () => null
    };
    break;

  default:
    PillEl = Template.bind({});
    PillEl.args = {
      text: 'Text',
      icon: IconNamesTypes.AddContent,
      color: PillColor.Closed,
      isRounded: true,
      size: PillSizeType.Medium,
      onRemoveClick: false
    };
    break;
}

export const Pill = PillEl;
