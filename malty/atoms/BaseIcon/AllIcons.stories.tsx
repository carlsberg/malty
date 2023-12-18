// No need to be worried about these dependencies here, they have been added as dev dependencies
import AddContent from '@carlsberggroup/malty.icons.add-content';
import AddEvent from '@carlsberggroup/malty.icons.add-event';
import AddProject from '@carlsberggroup/malty.icons.add-project';
import AddedDocument from '@carlsberggroup/malty.icons.added-document';
import Alert from '@carlsberggroup/malty.icons.alert';
import AlertConnection from '@carlsberggroup/malty.icons.alert-connection';
import AppDropBox from '@carlsberggroup/malty.icons.app-dropbox';
import AppFacebook from '@carlsberggroup/malty.icons.app-facebook';
import AppGithub from '@carlsberggroup/malty.icons.app-github';
import AppInstagram from '@carlsberggroup/malty.icons.app-instagram';
import AppLinkedin from '@carlsberggroup/malty.icons.app-linkedin';
import AppPowerbi from '@carlsberggroup/malty.icons.app-powerbi';
import AppSkype from '@carlsberggroup/malty.icons.app-skype';
import Arrange from '@carlsberggroup/malty.icons.arrange';
import ArrowSmallDown from '@carlsberggroup/malty.icons.arrow-small-down';
import ArrowSmallLeft from '@carlsberggroup/malty.icons.arrow-small-left';
import ArrowSmallRight from '@carlsberggroup/malty.icons.arrow-small-right';
import ArrowSmallUp from '@carlsberggroup/malty.icons.arrow-small-up';
import At from '@carlsberggroup/malty.icons.at';
import Attachment from '@carlsberggroup/malty.icons.attachment';

import CarlsbergFilled from '@carlsberggroup/malty.icons.carlsberg-filled';

import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { BaseIconProps, IconColor, IconSize } from './BaseIcon.types';

const allIcons = [
  AddContent,
  AddEvent,
  AddProject,
  AddedDocument,
  Alert,
  AlertConnection,
  AppDropBox,
  AppFacebook,
  AppGithub,
  AppInstagram,
  AppLinkedin,
  AppPowerbi,
  AppSkype,
  Arrange,
  ArrowSmallDown,
  ArrowSmallLeft,
  ArrowSmallRight,
  ArrowSmallUp,
  At,
  Attachment,
  CarlsbergFilled
];

const meta: Meta<BaseIconProps> = {
  // TODO: remove "2" once the deprecetion is over
  title: 'Icons/All Icons 2',
  parameters: {
    importObject: 'Icon',
    importPath: '@carlsberggroup/malty.icon.[icon-name]'
  },
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
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`;

const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b0afaf80;
  border-radius: 4px;
  padding: 10px 5px;
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
