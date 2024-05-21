import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { PaginationProps, PaginationType } from './Pagination.types';

const PaginationComponent = ({ currentPage, ...props }: PaginationProps) => {
  const [statePage, setStatePage] = useState(currentPage);

  return <Pagination {...props} onChange={(page) => setStatePage(Number(page))} currentPage={statePage} />;
};

const meta: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    importObject: 'Pagination',
    importPath: '@carlsberggroup/malty.molecules.pagination'
  },
  render: (args) => <PaginationComponent {...args} />,
  argTypes: {
    onChange: {
      description: 'Function to be executed when page changes',
      control: 'none',
      table: {
        category: 'Events',
        type: {
          summary: '(page: number | string, trigger?: PaginationTrigger) => void;'
        }
      }
    },
    currentPage: {
      description: 'Current number of pagination',
      control: 'number',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    count: {
      description: 'Total number of pages',
      control: 'number',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    siblingCount: {
      description: 'You can specify how many digits pages to display',
      control: 'number',
      table: {
        type: {
          summary: 'number | undefined'
        }
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Pagination data-testid',
      table: {
        type: {
          summary: 'string | undefined'
        }
      }
    },
    type: {
      description: 'Type options for pagination',
      options: Object.values(PaginationType),
      mapping: PaginationType,
      control: 'select',
      table: {
        defaultValue: {
          summary: PaginationType.Default
        },
        type: {
          summary: 'PaginationType | undefined'
        }
      }
    },
    isWhite: {
      description: 'Changes color of component to white',
      control: 'boolean',
      table: {
        category: 'Styling',
        type: {
          summary: 'boolean | undefined'
        }
      }
    },
    disabled: {
      description: 'Property that allows to disable the component',
      control: 'boolean',
      table: {
        category: 'State',
        type: {
          summary: 'boolean | undefined'
        }
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<PaginationProps>;

export const Base: Story = {
  args: {
    count: 10,
    currentPage: 1,
    type: PaginationType.Default,
    disabled: false,
    dataTestId: 'pagination',
    isWhite: false
  }
};

export const Compact: Story = {
  args: {
    ...Base.args,
    type: PaginationType.Compact
  }
};

export const Input: Story = {
  args: {
    ...Base.args,
    type: PaginationType.Input
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export default meta;
