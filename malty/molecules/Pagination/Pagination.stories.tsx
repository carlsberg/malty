import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { PaginationProps, PaginationType } from './Pagination.types';

const PaginationComponent = (props: PaginationProps) => {
  const { currentPage } = props;
  const [statePage, setStatePage] = useState(currentPage);

  return <Pagination {...props} onChange={(page) => setStatePage(Number(page))} currentPage={statePage} />;
};

const meta: Meta<PaginationProps> = {
  component: PaginationComponent,
  title: 'Navigation/Pagination',
  parameters: {
    importObject: 'Pagination',
    importPath: '@carlsberggroup/malty.molecules.pagination'
  },
  render: (args) => <PaginationComponent {...args} />,
  argTypes: {
    onChange: {
      description: 'Function to be executed when page changes'
    },
    currentPage: {
      description: 'Current number of pagination',
      control: 'number'
    },
    count: {
      description: 'Total number of pages',
      control: 'number'
    },
    siblingCount: {
      description: 'You can specify how many digits pages to display',
      control: 'number'
    },
    dataTestId: {
      control: 'text',
      description: 'Pagination data-testid'
    },
    type: {
      description: 'Type options for pagination',
      options: Object.keys(PaginationType),
      mapping: PaginationType,
      control: {
        type: 'select',
        label: Object.keys(PaginationType)
      }
    },
    isWhite: {
      description: 'Changes color of component to white',
      control: 'boolean'
    },
    disabled: {
      description: 'Property that allows to disable the component',
      control: 'boolean'
    }
  }
};

type Story = StoryObj<PaginationProps>;

export const Base: Story = {
  args: {
    count: 10,
    currentPage: 1,
    type: PaginationType.Default,
    disabled: false
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
