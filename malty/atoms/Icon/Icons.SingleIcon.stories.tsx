/* eslint-disable react/destructuring-assignment */
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Icon } from './Icon';
import { Colors, IconInterface, NamesTypes, SizesTypes } from './Icon.types';

const convertToKebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const getValueByKeyForStringEnum = (value: string) => Object.entries(NamesTypes).find(([key]) => key === value)?.[1];

const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const variant: string = urlParams.get('variant') || 'AddContent';

const defaultIconName: NamesTypes = getValueByKeyForStringEnum(variant) || NamesTypes.AddContent;

export default {
  title: 'Atoms/Icons/Single Icon',
  component: Icon,
  parameters: {
    importObject: 'AddContent',
    importPath: '@carlsberggroup/malty.atoms.icons.add-content'
  },
  argTypes: {
    name: {
      options: Object.values(NamesTypes),
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      defaultValue: defaultIconName,
      control: {
        type: 'select'
      }
    },
    color: {
      options: Object.values(Colors),
      description: 'Icon color, options are',
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
      description: 'Icon size, options are',
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
    onClick: {
      description: 'Function to run when icon is clicked.'
    }
  }
} as Meta;

const Template: Story<IconInterface> = (args) => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const params = story.parameters;
  const [object, setObject] = useState(args.name);
  const [path, setPath] = useState(
    `@carlsberggroup/malty.atoms.icons.${convertToKebabCase(args.name || 'AddContent')}`
  );

  useLayoutEffect(() => {
    params.importObject = object;
    params.importPath = path;
  }, [story, object, path]);

  useEffect(() => {
    setObject(args.name);
    setPath(`@carlsberggroup/malty.atoms.icons.${convertToKebabCase(args.name || 'AddContent')}`);
  }, [args.name]);

  useEffect(() => {
    const name: string = args.name || 'AddContent';
    params.importObject = name;
    params.importPath = `@carlsberggroup/malty.atoms.icons.${convertToKebabCase(name)}`;
  }, [args.name]);

  return <Icon name={getValueByKeyForStringEnum(args.name || 'AddContent')} color={args.color} size={args.size} />;
};

export const SingleIcon = Template.bind({});

SingleIcon.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large
};
