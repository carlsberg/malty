import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { PillColor, PillProps, PillSizeType } from './Pill.types';

export default {
  title: 'Atoms/Pill',
  component: Pill,
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

export const SimplePill = Template.bind({});
SimplePill.args = {
  text: 'Text',
  icon: IconNamesTypes.AddContent,
  color: PillColor.Closed,
  isRounded: true,
  size: PillSizeType.Medium,
  onRemoveClick: false
};

export const IconPill = Template.bind({});
IconPill.args = {
  icon: IconNamesTypes.CarlsbergFilled,
  color: PillColor.New,
  isRounded: true,
  size: PillSizeType.Medium,
  onRemoveClick: false
};

export const IconLabelPill = Template.bind({});
IconLabelPill.args = {
  text: 'P',
  color: PillColor.Archive,
  isRounded: false,
  size: PillSizeType.Medium,
  onRemoveClick: false
};

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

export const Removeable = TemplateRemovable.bind({});
Removeable.args = {
  text: 'Removeable',
  color: PillColor.Hold,
  isRounded: false,
  size: PillSizeType.Medium,
  onRemoveClick: () => null
};
