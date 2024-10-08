import { BaseIconProps, IconColor, IconSize } from '@carlsberg/malty.atoms.base-icon/BaseIcon.types';
import { CarlsbergFilled } from '@carlsberg/malty.icons.carlsberg-filled';
import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import { allIcons } from './AllIconsMap';
import {
  StyledCopiedText,
  StyledIconList,
  StyledIconWrapper,
  StyledName,
  StyledSearch,
  StyledWrapper
} from './AllIconsStories.styled';

const meta: Meta<BaseIconProps> = {
  title: 'Icons/Icons',
  parameters: {
    importObject: 'IconName',
    importPath: '@carlsberg/malty.icons.[icon-name]'
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
    ariaLabel: {
      description: 'The ariaLabel attribute defines a string value that labels the svg Icon',
      control: 'text'
    },
    onClick: {
      description: 'This will render a button on top of the icon executing the function'
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

    const filteredIcons = allIcons.filter((icon) => icon.name.toLowerCase().includes(value.toLowerCase()));

    setIcons(filteredIcons);
  };

  const handleClipboard = (iconName: string) => {
    const kebabCase = iconName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const importPath = `import { ${iconName} } from '@carlsberg/malty.icons.${kebabCase}';`;

    navigator.clipboard.writeText(importPath);

    setTooltipVisible(iconName);

    setTimeout(() => {
      setTooltipVisible(undefined);
    }, 500);
  };

  return (
    <StyledWrapper>
      <StyledSearch
        type="search"
        name="search"
        placeholder="Search icons..."
        autoComplete="off"
        onChange={handleSearch}
      />
      <StyledIconList>
        {icons.map(({ component: Icon, name }) => (
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
        ))}
      </StyledIconList>
    </StyledWrapper>
  );
};

export const Base: Story = {
  render: (args: BaseIconProps) => <CarlsbergFilled {...args} />
};

export const AllIcons: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  render: (args: BaseIconProps) => <SearchIcons {...args} />
};

export default meta;
