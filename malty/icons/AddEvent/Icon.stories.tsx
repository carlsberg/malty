import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Colors, IconInterface, SizesTypes } from './Icon.types';
// eslint-disable-next-line import/no-named-default
import { default as Icon } from './index';

export default {
  title: 'Icons/Add Event',
  component: Icon,
  argTypes: {
    color: {
      options: Object.values(Colors),
      description: 'Color options are',
      defaultValue: Colors.Primary,
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
      options: Object.values(SizesTypes),
      defaultValue: SizesTypes.Medium,
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    viewBox: {
      table: {
        disable: true
      }
    },
    onIconClick: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<IconInterface> = (args) => <Icon {...args} />;

export const AddEvent = Template.bind({});
AddEvent.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large
};
