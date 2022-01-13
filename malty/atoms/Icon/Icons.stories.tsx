import { StyledIcon } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useLayoutEffect, useState } from 'react';
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

const convertToKebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

export default {
  title: 'Atoms/Icons',
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
      defaultValue: NamesTypes.AddContent,
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
  const context = React.useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const params = story.parameters;
  const [path, setPath] = useState(story.args.name);
  const [object, setObject] = useState(story.args.name);

  useLayoutEffect(() => {
    setPath(story.args.name);
    setObject(`@carlsberggroup/malty.atoms.icons.${convertToKebabCase(story.args.name)}`);
  }, [story, story.args, story.args.name]);

  useLayoutEffect(() => {
    params.importObject = path;
    params.importPath = object;
  }, [path, object]);

  return <Icon {...args} />;
};

export const SingleIcon = Template.bind({});
SingleIcon.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Large,
  name: NamesTypes.AddContent
};

const AllIconsTemplate: Story<IconInterface> = (args) => (
  <StyledAllIconsWrapper>
    {Object.values(NamesTypes).map((name, index) => (
      <div title={name} key={index}>
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
