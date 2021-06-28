import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { StyledIcon } from './Icon.styled';
import { ColorsTypes, IconInterface, NamesTypes, SizesTypes } from './Icon.types';

const StyledAllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${StyledIcon} {
    margin: 10px;
  }
`;

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: NamesTypes,
      description: 'Name options listed below',
      defaultValue: NamesTypes.AddContent,
      control: {
        type: 'select'
      }
    },
    color: {
      options: ColorsTypes,
      description: 'Color options are',
      defaultValue: ColorsTypes.Primary,
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
    }
  }
} as Meta;

const Template: Story<IconInterface> = ({ color, size, name = NamesTypes.AddContent }) => (
  <Icon name={name} color={color} size={size} />
);

export const Main = Template.bind({});
Main.parameters = {
  color: ColorsTypes.Primary,
  size: SizesTypes.Large,
  name: NamesTypes.AddContent
};

const AllIconsTemplate: Story<IconInterface> = ({ color, size }) => (
  <StyledAllIconsWrapper>
    {Object.values(NamesTypes).map((name) => (
      <Icon name={name} color={color} size={size} />
    ))}
  </StyledAllIconsWrapper>
);

export const AllIcons = AllIconsTemplate.bind({});
AllIcons.parameters = {
  color: ColorsTypes.Primary,
  size: SizesTypes.Large
};
