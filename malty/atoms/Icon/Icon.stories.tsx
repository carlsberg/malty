import { StyledIcon } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { Colors, IconInterface, NamesTypes, SizesTypes } from './Icon.types';

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
  parameters: {
    importObject: 'Icon',
    importPath: '@carlsberggroup/malty.atoms.icon'
  },
  argTypes: {
    name: {
      options: Object.values(NamesTypes),
      description: 'Name options listed below',
      defaultValue: NamesTypes.AddContent,
      control: {
        type: 'select'
      }
    },
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

export const Main = Template.bind({});
Main.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large,
  name: NamesTypes.AddContent
};

const AllIconsTemplate: Story<IconInterface> = (args) => (
  <StyledAllIconsWrapper>
    {Object.values(NamesTypes).map((name) => (
      <div title={name}>
        <Icon {...args} name={name} />
      </div>
    ))}
  </StyledAllIconsWrapper>
);

export const AllIcons = AllIconsTemplate.bind({});
AllIcons.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large
};
