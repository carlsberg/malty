/* eslint-disable react/destructuring-assignment */
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Icon } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

const convertToKebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const getValueByKeyForStringEnum = (value: string) => Object.entries(IconName).find(([key]) => key === value)?.[1];

const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const variant: string = urlParams.get('variant') || 'CarlsbergFilled';

const defaultIconName: IconName = getValueByKeyForStringEnum(variant) || IconName.CarlsbergFilled;

export default {
  title: 'Icons/Single Icon',
  component: Icon,
  parameters: {
    importObject: 'CarlsbergFilled',
    importPath: '@carlsberggroup/malty.atoms.icons.add-content'
  },
  argTypes: {
    name: {
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        type: 'select',
        label: Object.values(IconName)
      },
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      table: {
        defaultValue: {
          summary: null
        }
      },
      defaultValue: defaultIconName
    },
    color: {
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor)
      },
      description: 'Icon color, options are',
      table: {
        defaultValue: {
          summary: 'IconColor.Primary'
        }
      },
      defaultValue: 'Primary'
    },
    size: {
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'radio',
        label: Object.values(IconSize)
      },
      description: 'Icon size, options are',
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
    onClick: {
      description: 'Function to run when icon is clicked.'
    }
  }
} as Meta;

const Template: Story<IconProps> = (args) => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const params = story.parameters;
  const [object, setObject] = useState(args.name);
  const [path, setPath] = useState(
    `@carlsberggroup/malty.atoms.icons.${convertToKebabCase(args.name || 'CarlsbergFilled')}`
  );

  useLayoutEffect(() => {
    params.importObject = object;
    params.importPath = path;
  }, [story, object, path]);

  useEffect(() => {
    setObject(args.name);
    setPath(`@carlsberggroup/malty.atoms.icons.${convertToKebabCase(args.name || 'CarlsbergFilled')}`);
  }, [args.name]);

  useEffect(() => {
    const name: string = args.name || 'CarlsbergFilled';
    params.importObject = name;
    params.importPath = `@carlsberggroup/malty.atoms.icons.${convertToKebabCase(name)}`;
  }, [args.name]);

  return <Icon name={getValueByKeyForStringEnum(args.name || 'CarlsbergFilled')} color={args.color} size={args.size} />;
};

export const SingleIcon = Template.bind({});
