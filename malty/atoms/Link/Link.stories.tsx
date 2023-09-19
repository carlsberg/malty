import { Story } from '@storybook/react';
import React from 'react';
import { Link as LinkComponent } from './Link';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

export default {
  title: 'Forms/Link',
  component: LinkComponent,
  parameters: {
    importObject: 'Link',
    importPath: '@carlsberggroup/malty.atoms.link'
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Use this prop to override the default value and, for example, integrate with other routing libraries like React Router or Next.js',
      table: {
        defaultValue: {
          summary: 'a'
        },
        type: {
          summary: 'ElementType<any> | undefined'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable link',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    color: {
      description: 'Link Color. Options are',
      options: Object.values(LinkColor),
      table: {
        defaultValue: {
          summary: 'LinkColor.DigitalBlack'
        }
      },
      control: {
        type: 'select'
      }
    },
    linkStyle: {
      description: 'Link Style. Options are',
      options: Object.values(LinkStyle),
      table: {
        defaultValue: {
          summary: 'LinkStyle.MediumDefault'
        }
      },
      control: {
        type: 'select'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Link data-testid'
    }
  }
};

const Template: Story<LinkProps> = (args) => <LinkComponent {...args}>Link text</LinkComponent>;

export const Link = Template.bind({});
