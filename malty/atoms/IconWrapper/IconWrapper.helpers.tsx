import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IconColor, IconSize, IconWrapperProps } from './IconWrapper.types';

export const IconStories = (name: string, Icon: React.FC<IconWrapperProps>) => {
  const storyMeta = {
    title: `Icons/Individual Icons/${name}`,
    component: Icon,
    parameters: {
      importObject: 'Icon',
      importPath: '@carlsberggroup/malty.atoms.icon'
    },
    argTypes: {
      color: {
        description: 'Color options are',
        options: Object.keys(IconColor),
        mapping: IconColor,
        control: {
          type: 'radio',
          label: Object.values(IconColor)
        },
        table: {
          defaultValue: {
            summary: 'IconColor.Primary'
          }
        },
        defaultValue: 'Primary'
      },
      size: {
        description: 'Size options are',
        options: Object.keys(IconSize),
        mapping: IconSize,
        control: {
          type: 'radio',
          label: Object.values(IconSize)
        },
        table: {
          defaultValue: {
            summary: 'IconSize.Medium'
          }
        },
        defaultValue: 'Medium'
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

  const Template: Story<IconWrapperProps> = ({ color, size }) => <Icon color={color} size={size} />;

  const story = Template.bind({});
  story.parameters = {
    color: IconColor.Primary,
    size: IconSize.Large
  };
  return [storyMeta, story];
};
