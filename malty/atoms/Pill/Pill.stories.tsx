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
      options: Object.values({ undefined, ...IconNamesTypes }),
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
      options: Object.values([false, () => null]),
      defaultValue: false,
      control: {
        type: 'radio'
      }
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
