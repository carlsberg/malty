import { Meta, Story } from '@storybook/react';
import React from 'react';
import { NamesTypes } from '../icon/icon.types';
import { Pill } from './pill';
import { PillColor, PillProps, PillSizeType } from './pill.types';

export default {
  title: 'Atoms/Pill',
  component: Pill,
  argTypes: {
    size: {
      options: PillSizeType,
      control: {
        type: 'select'
      }
    },
    color: {
      options: PillColor,
      control: {
        type: 'select'
      }
    },
    icon: {
      options: NamesTypes,
      control: {
        type: 'select'
      }
    }
  }
} as Meta;
const Template: Story<PillProps> = ({ text, icon, color, isRounded, onRemoveClick, onClick, size }: PillProps) => (
  <Pill
    text={text}
    onClick={onClick}
    onRemoveClick={onRemoveClick}
    icon={icon}
    color={color}
    isRounded={isRounded}
    size={size}
  />
);

export const Main = Template.bind({});
Main.args = {
  text: 'Text',
  icon: NamesTypes.AddContent,
  color: PillColor.New,
  isRounded: true,
  size: PillSizeType.Medium,
  onClick: () => null
};

export const Removeable = Template.bind({});
Removeable.args = {
  text: 'Removeable',
  color: PillColor.Hold,
  isRounded: false,
  size: PillSizeType.Medium,
  onRemoveClick: () => null
};
