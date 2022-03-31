import { StyledIcon } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { DocsContext } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon as IconComponent } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

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
<<<<<<< HEAD:malty/atoms/Icon/Icons.stories.tsx
  title: 'Atoms/Icons',
  component: Icon,
=======
  title: 'Icons/All Icons',
  component: IconComponent,
>>>>>>> develop:malty/atoms/Icon/Icon.AllIcons.stories.tsx
  parameters: {
    importObject: 'AddContent',
    importPath: '@carlsberggroup/malty.atoms.icons.add-content'
  },
  argTypes: {
    name: {
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        disable: true,
        label: Object.values(IconName)
      },
      defaultValue: 'CarlsbergFilled'
    },
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
          summary: 'IconColor.Primary'
        }
      },
      defaultValue: 'Primary'
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
<<<<<<< HEAD:malty/atoms/Icon/Icons.stories.tsx
          summary: 'Medium'
=======
          summary: 'IconSize.Medium'
>>>>>>> develop:malty/atoms/Icon/Icon.AllIcons.stories.tsx
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

<<<<<<< HEAD:malty/atoms/Icon/Icons.stories.tsx
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
=======
const Template: Story<IconProps> = (args) => (
>>>>>>> develop:malty/atoms/Icon/Icon.AllIcons.stories.tsx
  <StyledAllIconsWrapper>
    {Object.values(IconName).map((name, index) => (
      <div title={name} key={index}>
        <IconComponent {...args} name={name} />
      </div>
    ))}
  </StyledAllIconsWrapper>
);

export const AllIcons = Template.bind({});
