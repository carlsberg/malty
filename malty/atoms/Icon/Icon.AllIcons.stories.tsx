import { StyledIcon } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Icon as IconComponent } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

const StyledAllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${StyledIcon} {
    margin: 10px;
  }
`;

export default {
  title: 'Icons/All Icons',
  component: IconComponent,
  parameters: {
    importObject: 'Icon',
    importPath: '@carlsberggroup/malty.atoms.icon',
  },
  argTypes: {
    name: {
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        disable: true,
        label: Object.values(IconName),
      },
      defaultValue: 'CarlsbergFilled',
    },
    color: {
      description: 'Icon color, options are',
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor),
      },
      table: {
        defaultValue: {
          summary: 'IconColor.DigitalBlack',
        },
      },
      defaultValue: 'DigitalBlack',
    },
    size: {
      description: 'Icon size, options are',
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'radio',
        label: Object.values(IconSize),
      },
      table: {
        defaultValue: {
          summary: 'IconSize.Medium',
        },
      },
      defaultValue: 'Medium',
    },
    viewBox: {
      table: {
        disable: true,
      },
    },
    onClick: {
      description: 'Function to run when icon is clicked.',
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => (
  <StyledAllIconsWrapper>
    {Object.values(IconName).map((name, index) => (
      <div title={name} key={index}>
        <IconComponent {...args} name={name} />
      </div>
    ))}
  </StyledAllIconsWrapper>
);

export const AllIcons = Template.bind({});
