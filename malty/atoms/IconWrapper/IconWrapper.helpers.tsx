import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Colors, IconWrapperInterface, SizesTypes } from './IconWrapper.types';

export const IconComposition = (Icon: React.FC<IconWrapperInterface>) => (
  <MaltyThemeProvider theme="global">
    <Icon color={Colors.Primary} size={SizesTypes.Medium} />
  </MaltyThemeProvider>
);

export const IconStories = (name: string, Icon: React.FC<IconWrapperInterface>) => {
  const storyMeta = {
    title: `Icons/${name}`,
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

  const Template: Story<IconWrapperInterface> = ({ color, size }) => <Icon color={color} size={size} />;

  const story = Template.bind({});
  story.parameters = {
    color: Colors.Primary,
    size: SizesTypes.Large
  };
  return [storyMeta, story];
};
