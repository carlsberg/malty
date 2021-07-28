import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { PillColor, PillProps, PillSizeType } from './Pill.types';

export default {
  title: 'Atoms/Pill',
  component: Pill,
  argTypes: {
    text: { control: 'text' },
    size: {
      options: Object.values(PillSizeType),
      control: {
        type: 'select'
      }
    },
    color: {
      options: Object.values(PillColor),
      control: {
        type: 'select'
      }
    },
    icon: {
      options: Object.values(IconNamesTypes),
      control: {
        type: 'select'
      }
    },
    isRounded: { control: 'boolean' },
    onClick: {
      table: {
        disable: true
      }
    },
    onRemoveClick: {
      table: {
        disable: true
      }
    }
  }
} as Meta;
const Template: Story<PillProps> = ({ text, icon, color, isRounded, onClick, size }: PillProps) => (
  <Pill text={text} onClick={onClick} icon={icon} color={color} isRounded={isRounded} size={size} />
);

export const Main = Template.bind({});
Main.args = {
  text: 'Text',
  icon: IconNamesTypes.AddContent,
  color: PillColor.New,
  isRounded: true,
  size: PillSizeType.Medium
};

const TemplateRemovable: Story<PillProps> = ({ text, icon, color, isRounded, onRemoveClick, size }: PillProps) => (
  <Pill text={text} onRemoveClick={onRemoveClick} icon={icon} color={color} isRounded={isRounded} size={size} />
);

export const Removeable = TemplateRemovable.bind({});
Removeable.args = {
  text: 'Removeable',
  color: PillColor.Hold,
  isRounded: false,
  size: PillSizeType.Medium
};
