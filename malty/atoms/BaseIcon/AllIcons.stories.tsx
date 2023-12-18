import AddContent from '@carlsberggroup/malty.icons.add-content';
import AlertIcon from '@carlsberggroup/malty.icons.alert';
import CarlsbergFilled from '@carlsberggroup/malty.icons.carlsberg-filled';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { BaseIconProps, IconColor, IconSize } from './BaseIcon.types';

const allIcons = [AddContent, AlertIcon, CarlsbergFilled];

const meta: Meta<BaseIconProps> = {
  // TODO: remove "2" once the deprecetion is over
  title: 'Icons/All Icons 2',
  parameters: {
    importObject: 'Icon',
    importPath: '@carlsberggroup/malty.icon.[icon-name]'
  },
  render: (args) => <AlertIcon {...args} />,
  argTypes: {
    color: {
      description: 'Icon color, options are',
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor)
      },
      table: {
        defaultValue: {
          summary: 'IconColor.DigitalBlack'
        }
      },
      defaultValue: 'DigitalBlack'
    },
    size: {
      description: 'Icon size, options are',
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
    dataTestId: {
      control: 'text'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<BaseIconProps>;

export const Base: Story = {
  render: (args) => <CarlsbergFilled {...args} />
};

const StyledIconList = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
`;

const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b0afaf80;
  border-radius: 2px;
  padding: 5px;
`;

const StyledSearch = styled.input`
  margin-bottom: 20px;
  font-size: 14px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  min-width: 250px;
`;

const StyledName = styled.span`
  margin-top: 6px;
  color: #64646480;
  font-size: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
`;

const SearchIcons = (args: BaseIconProps) => {
  const [icons, setIcons] = useState(allIcons);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredIcons = allIcons.filter((icon) => icon.name.toLowerCase().includes(value));

    setIcons(filteredIcons);
  };

  return (
    <>
      <StyledSearch
        type="search"
        name="search"
        placeholder="Search icons..."
        autoComplete="off"
        onChange={handleSearch}
      />
      <StyledIconList>
        {icons.map((icon) => (
          <StyledIconWrapper>
            <div style={{ alignSelf: 'center' }}>{icon(args)}</div>
            <StyledName>{icon.name}</StyledName>
          </StyledIconWrapper>
        ))}
      </StyledIconList>
    </>
  );
};

export const AllIcons: Story = {
  render: (args) => <SearchIcons {...args} />
};

export default meta;
