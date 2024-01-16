import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, FC, useState } from 'react';
import { allIcons } from './AllIconsMap';
import {
  StyledCopiedText,
  StyledIconList,
  StyledIconWrapper,
  StyledName,
  StyledSearch
} from './AllIconsStories.styled';
import { BaseIconProps, IconColor, IconSize } from './BaseIcon.types';

const meta: Meta<BaseIconProps> = {
  title: 'Icons/All Icons',
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
        {icons.map((Icon: FC<BaseIconProps>) => {
          const { name } = Icon;

          return (
            <StyledIconWrapper key={name} onClick={() => handleClipboard(name)}>
              {tooltipVisible === name ? (
                <StyledCopiedText>Copied!</StyledCopiedText>
              ) : (
                <>
                  <Icon {...args} />
                  <StyledName>{name}</StyledName>
                </>
              )}
            </StyledIconWrapper>
          );
        })}
      </StyledIconList>
    </>
  );
};

export const Base: Story = {
  render: (args) => <CarlsbergFilled {...args} />
};

export const AllIcons: Story = {
  render: (args) => <SearchIcons {...args} />
};

export default meta;