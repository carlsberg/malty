/* eslint-disable react/destructuring-assignment */
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon as IconComponent } from './Icon';
import { Colors, IconInterface, NamesTypes, SizesTypes } from './Icon.types';

const StyledWrapper = styled.div`
  display: inline;
  margin: 10px;
`;

interface MultiNamesTypes extends IconInterface {
  names: NamesTypes[];
}

const getValueByKeyForStringEnum = (value: string) => Object.entries(NamesTypes).find(([key]) => key === value)?.[1];

export default {
  title: 'Atoms/Icons/Multiple Icons',
  component: IconComponent,
  parameters: {
    importObject: 'AddContent',
    importPath: '@carlsberggroup/malty.atoms.icon'
  },
  argTypes: {
    names: {
      name: 'names',
      options: Object.values(NamesTypes),
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      defaultValue: [NamesTypes.AddContent],
      control: {
        type: 'check'
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
    name: {
      table: {
        disable: true
      }
    },
    onClick: {
      description: 'Function to run when icon is clicked.'
    }
  }
} as Meta;

const Template: Story<MultiNamesTypes> = (args) => {
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

  return (
    <>
      {Object.values(args.names).map((itemName: string, index: number) => (
        <StyledWrapper title={itemName} key={index}>
          <IconComponent size={args.size} color={args.color} name={getValueByKeyForStringEnum(itemName)} />
        </StyledWrapper>
      ))}
    </>
  );
};

export const MultipleIcons = Template.bind({});

MultipleIcons.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large
};
