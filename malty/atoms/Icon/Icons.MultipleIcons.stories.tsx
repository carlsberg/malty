/* eslint-disable react/destructuring-assignment */
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon as IconComponent } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

const StyledWrapper = styled.div`
  display: inline;
  margin: 10px;
`;

interface MultiIconNames extends IconProps {
  names: IconName[];
}

const getValueByKeyForStringEnum = (value: string) =>
  Object.entries(IconName).find(([key]) => key === value)?.[1];

export default {
  title: 'Icons/Multiple Icons',
  component: IconComponent,
  parameters: {
    importObject: 'CarlsbergFilled',
    importPath: '@carlsberggroup/malty.atoms.icon',
  },
  argTypes: {
    names: {
      name: 'names',
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        type: 'check',
        label: Object.values(IconName),
      },
      defaultValue: [IconName.CarlsbergFilled],
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
    name: {
      table: {
        disable: true,
      },
    },
    onClick: {
      description: 'Function to run when icon is clicked.',
    },
  },
} as Meta;

const Template: Story<MultiIconNames> = (args) => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const params = story.parameters;
  const [object, setObject] = useState(args.names);

  useLayoutEffect(() => {
    params.importObject = object;
  }, [story, object]);

  useEffect(() => {
    setObject(args.names);
  }, [args.names]);

  return typeof args.names === 'string' ? (
    <StyledWrapper title={args.names} key={0}>
      <IconComponent
        size={args.size}
        color={args.color}
        name={getValueByKeyForStringEnum(args.names)}
      />
    </StyledWrapper>
  ) : (
    <>
      {Object.values(args.names).map((itemName: string, index: number) => (
        <StyledWrapper title={itemName} key={index}>
          <IconComponent
            size={args.size}
            color={args.color}
            name={getValueByKeyForStringEnum(itemName)}
          />
        </StyledWrapper>
      ))}
    </>
  );
};

export const MultipleIcons = Template.bind({});
