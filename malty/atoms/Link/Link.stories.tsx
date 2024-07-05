import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

const meta: Meta<LinkProps> = {
  title: 'Forms/Link',
  component: Link,
  parameters: {
    importObject: 'Link',
    importPath: '@carlsberg/malty.atoms.link'
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Use this prop to override the default value and, for example, integrate with other routing libraries like React Router or Next.js. The props of the component passed in the "as" prop will be part of the Link component',
      table: {
        defaultValue: {
          summary: 'a'
        },
        type: {
          summary: 'Component | undefined'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable link',
      table: {
        category: 'State',
        defaultValue: {
          summary: false
        }
      }
    },
    color: {
      description: 'Link Color. Options are',
      options: Object.values(LinkColor),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: LinkColor.DigitalBlack
        }
      },
      control: 'select'
    },
    linkStyle: {
      description: 'Link Style. Options are',
      options: Object.values(LinkStyle),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: LinkStyle.MediumDefault
        }
      },
      control: 'select'
    },
    dataTestId: {
      control: 'text',
      description: 'Link data-testid'
    },
    children: {
      description: 'Use this prop to give a label to the component',
      table: {
        type: {
          summary: 'ReactNode | undefined'
        }
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<LinkProps>;

export const Base: Story = {
  args: {
    children: 'Link text',
    disabled: false,
    dataTestId: 'link'
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export default meta;
