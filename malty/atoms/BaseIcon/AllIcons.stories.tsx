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
import CheckboxCheckOutline from '@carlsberggroup/malty.icons.checkbox-check-outline';
import Clone from '@carlsberggroup/malty.icons.clone';

import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, FC, useState } from 'react';
import {
  StyledCopiedText,
  StyledIconList,
  StyledIconWrapper,
  StyledName,
  StyledSearch
} from './AllIconsStories.styled';
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
  CarlsbergFilled,
  CheckboxCheckOutline,
  Clone
];

const meta: Meta<BaseIconProps> = {
  // TODO: remove "2" once the deprecetion is over
  title: 'Icons/All Icons 2',
  parameters: {
    importObject: 'IconName',
    importPath: '@carlsberggroup/malty.icons.[icon-name]'
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

const SearchIcons = (args: BaseIconProps) => {
  const [icons, setIcons] = useState(allIcons);
  const [tooltipVisible, setTooltipVisible] = useState<string>();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredIcons = allIcons.filter((icon) => icon.name.toLowerCase().includes(value));

    setIcons(filteredIcons);
  };

  const handleClipboard = (iconName: string) => {
    const kebabCase = iconName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const importPath = `import { ${iconName} } from '@carlsberggroup/malty.icons.${kebabCase}';`;

    navigator.clipboard.writeText(importPath);

    setTooltipVisible(iconName);

    setTimeout(() => {
      setTooltipVisible(undefined);
    }, 500);
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
        {icons.map((icon) => {
          const Icon = icon as FC<BaseIconProps>;

          return (
            <StyledIconWrapper key={icon.name} onClick={() => handleClipboard(icon.name)}>
              {tooltipVisible === icon.name ? (
                <StyledCopiedText>Copied!</StyledCopiedText>
              ) : (
                <>
                  <Icon {...args} />
                  <StyledName>{icon.name}</StyledName>
                </>
              )}
            </StyledIconWrapper>
          );
        })}
      </StyledIconList>
    </>
  );
};

export const AllIcons: Story = {
  render: (args) => <SearchIcons {...args} />
};

export default meta;
