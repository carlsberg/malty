import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { FloaterProps } from '.';
import { Floater as FloaterComponent } from './Floater';
import { FloaterIconPosition } from './Floater.types';

export default {
  title: 'Forms/Floater',
  component: FloaterComponent,
  parameters: {
    importObject: 'Floater',
    importPath: '@carlsberggroup/malty.atoms.floater',
    variants: ['text']
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button label, can be'
    },

    onClick: {
      description: 'This is a function that will run on click. It is not a required property'
    },
    scroll: {
      description: 'Scroll position where will floater show',
      table: {
        defaultValue: {
          summary: 0
        }
      },
      control: {
        type: 'number'
      }
    },

    icon: {
      description: 'When selected, button label will contain the selected icon',
      options: Object.values({ undefined, ...IconName }),
      control: {
        type: 'select'
      }
    },
    iconPos: {
      description: 'When icon present, position will be',
      options: Object.values(FloaterIconPosition),
      table: {
        defaultValue: {
          summary: 'Right'
        }
      },
      control: {
        type: 'select'
      }
    },
    negative: {
      control: 'boolean',
      description: 'Should this be a white button?'
    }
  }
};

const Template: Story<FloaterProps> = (args) => <FloaterComponent {...args} />;

export const Floater = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'text':
    Floater.args = {
      text: 'Floater',
      iconPos: FloaterIconPosition.Right,
      negative: false,
      icon: IconName.ArrowSmallUp
    };
    break;
  default:
    Floater.args = {
      text: '',
      iconPos: FloaterIconPosition.Right,
      negative: false,
      icon: IconName.ArrowSmallUp
    };
    break;
}
