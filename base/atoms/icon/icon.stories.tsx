import { Meta, Story } from '@storybook/react';
import React from 'react';
import * as Icons from './icon';
import { ColorsTypes, IconInterface, NamesTypes, SizesTypes } from './icon.types';

export default {
  title: 'Icon',
  component: Icons.AddContent, // Should be dynamically set
  argTypes: {
    name: {
      options: NamesTypes,
      description: 'Name options listed below',
      control: {
        type: 'select'
      }
    },
    color: {
      options: ColorsTypes,
      description: 'Color options are',
      defaultValue: 'Primary',
      table: {
        defaultValue: {
          summary: 'Primary'
        }
      },
      control: {
        type: 'radio'
      }
    },
    size: {
      options: SizesTypes,
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    }
  }
} as Meta;

const Template: Story<IconInterface> = (args) => {
  const SelectedComponent = Icons[args.name || 'CarlsbergFilled'];
  return (
    <>
      <SelectedComponent color={args.color} size={args.size} />
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  name: NamesTypes.CarlsbergFilled,
  color: ColorsTypes.Primary,
  size: SizesTypes.Small
};
