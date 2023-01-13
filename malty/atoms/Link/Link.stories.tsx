import { Story } from '@storybook/react';
import React from 'react';
import { Link as LinkComponent } from './Link';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

export default {
  title: 'Forms/Link',
  component: LinkComponent,
  parameters: {
    importObject: 'Link',
    importPath: '@carlsberggroup/malty.atoms.link',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to be displayed as link',
    },

    url: {
      control: 'text',
      description:
        'Use this component as link or button with a simple URL, no click function needed',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable link',
    },
    color: {
      description: 'Link Color. Options are',
      options: Object.values(LinkColor),
      table: {
        defaultValue: {
          summary: 'LinkColor..DigitalBlack',
        },
      },
      control: {
        type: 'select',
      },
    },
    linkStyle: {
      description: 'Link Style. Options are',
      options: Object.values(LinkStyle),
      table: {
        defaultValue: {
          summary: 'LinkStyle..MediumDefault',
        },
      },
      control: {
        type: 'select',
      },
    },

    dataTestId: {
      control: 'text',
      description: 'Link data-testid',
    },
    children: {
      control: 'text',
      description:
        'Label your button with a child, as a string. This is an alternative to the `text` property',
    },
  },
};

const Template: Story<LinkProps> = (args) => <LinkComponent {...args} />;

export const Link = Template.bind({});

Link.args = {
  text: 'Link text',
};
