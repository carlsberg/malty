import { Information } from '@carlsberggroup/malty.icons.information';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AlertInline } from './AlertInline';
import { AlertInlineColor, AlertInlineProps, AlertInlineSize } from './AlertInline.types';

const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
`;

const AlertInlineComponent = (props: AlertInlineProps) => {
  return (
    <StyledContainer>
      <AlertInline {...props} />
    </StyledContainer>
  );
};

const meta: Meta<AlertInlineProps> = {
  title: 'Information/Alert Inline ',
  component: AlertInline,
  parameters: {
    importObject: 'AlertInline',
    importPath: '@carlsberggroup/malty.molecules.alert-inline'
  },
  render: (args) => <AlertInlineComponent {...args} />,
  argTypes: {
    title: {
      control: 'text',
      description: 'Alert Inline title'
    },
    message: {
      control: 'text',
      description: 'Alert Inline message'
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select',
      table: {
        category: 'Icon'
      }
    },
    size: {
      description: 'Alert Inline size - only for alerts without actions. Options are',
      options: Object.values(AlertInlineSize),
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: AlertInlineSize.Default
        }
      }
    },
    color: {
      description: 'Alert Inline color',
      options: Object.keys(AlertInlineColor),
      mapping: AlertInlineColor,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: AlertInlineColor.Notification
        }
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Alert Inline data-testid'
    },
    firstAction: {
      description: 'Function to be executed when first action is clicked',
      table: {
        category: 'Events'
      }
    },
    secondAction: {
      description: 'Function to be executed when second action is clicked',
      table: {
        category: 'Events'
      }
    },
    firstActionText: {
      control: 'text',
      description: 'First action text',
      table: {
        category: 'Events'
      }
    },
    secondActionText: {
      control: 'text',
      description: 'Second action text',
      table: {
        category: 'Events'
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<AlertInlineProps>;

export const Base: Story = {
  args: {
    message: 'Hello, Im the In Line Alert! Play with me.',
    size: AlertInlineSize.Default,
    color: AlertInlineColor.Notification,
    dataQaId: 'inline-alert'
  }
};

export const Icon: Story = {
  args: {
    ...Base.args,
    icon: <Information />
  }
};

export const WithTitle: Story = {
  args: {
    ...Base.args,
    title: 'Title Alert'
  }
};

export const Action: Story = {
  args: {
    ...Base.args,
    firstAction: action('First Action clicked'),
    firstActionText: 'First Action',
    secondAction: action('Second Action clicked'),
    secondActionText: 'Second Action'
  }
};

export default meta;
