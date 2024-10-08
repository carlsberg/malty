import { LoadingColor } from '@carlsberg/malty.molecules.loading';
import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from './Table';
import { TableHeaderAlignment, TableHeaderProps, TableProps, TableRowProps, TableSize } from './Table.types';

const headers: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name',
    sorting: true
  },
  {
    header: 'Age',
    key: 'age'
  },
  {
    header: 'Birthdate',
    key: 'birthdate',
    sorting: true,
    cell: (props) => {
      const date = props.getValue() as Date;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    }
  },
  {
    header: '',
    key: 'actions',
    isEmpty: true
  }
];

const headersCenter: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name',
    headerAlignment: TableHeaderAlignment.Center
  },
  {
    header: 'Age',
    key: 'age',
    headerAlignment: TableHeaderAlignment.Center
  }
];

const rows: TableRowProps[] = [
  {
    id: 1,
    name: 'Fitzgerald Moody',
    age: 35,
    birthdate: new Date(1988, 5, 12),
    actions: <button type="button">Delete</button>
  },
  {
    id: 2,
    name: 'Liberty Bell',
    age: 66,
    birthdate: new Date(1957, 6, 22),
    actions: <button type="button">Delete</button>
  },
  {
    id: 3,
    name: 'Clayton Carpenter',
    age: 25,
    birthdate: new Date(1998, 6, 10),
    actions: <button type="button">Delete</button>
  },
  {
    id: 4,
    name: 'Halla Pugh',
    age: 31,
    birthdate: new Date(1992, 2, 12),
    actions: <button type="button">Delete</button>
  },
  {
    id: 5,
    name: 'Jaquelyn Valenzuela',
    age: 52,
    birthdate: new Date(1971, 4, 23),
    actions: <button type="button">Delete</button>
  },
  {
    id: 6,
    name: 'Kyra Mcknight',
    age: 23,
    birthdate: new Date(2000, 3, 30),
    actions: <button type="button">Delete</button>
  },
  {
    id: 7,
    name: 'Naida Barlow',
    age: 52,
    birthdate: new Date(1971, 1, 25),
    actions: <button type="button">Delete</button>
  },
  {
    id: 8,
    name: 'Amir Joyce',
    age: 26,
    birthdate: new Date(1997, 7, 10),
    actions: <button type="button">Delete</button>
  },
  {
    id: 9,
    name: 'Lenore Dixon',
    age: 40,
    birthdate: new Date(1983, 2, 22),
    actions: <button type="button">Delete</button>
  },
  {
    id: 10,
    name: 'Carla Velazquez',
    age: 29,
    birthdate: new Date(1994, 5, 15),
    actions: <button type="button">Delete</button>
  },
  {
    id: 11,
    name: 'Quamar Petersen',
    age: 58,
    birthdate: new Date(1965, 4, 27),
    actions: <button type="button">Delete</button>
  },
  {
    id: 12,
    name: 'Patrick Stout',
    age: 61,
    birthdate: new Date(1962, 6, 7),
    actions: <button type="button">Delete</button>
  },
  {
    id: 13,
    name: 'Ian Rhodes',
    age: 33,
    birthdate: new Date(1990, 3, 11),
    actions: <button type="button">Delete</button>
  },
  {
    id: 14,
    name: 'Wesley Simmons',
    age: 67,
    birthdate: new Date(1956, 4, 20),
    actions: <button type="button">Delete</button>
  },
  {
    id: 15,
    name: 'Ivy Crawford',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 16,
    name: 'adf dsf sd',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 17,
    name: 'Ivy asdf',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 18,
    name: 'Ivy 2',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 19,
    name: 'Ivy 3',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 20,
    name: 'Ivy Crawasdfford',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 21,
    name: 'Ivy 5',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  },
  {
    id: 22,
    name: 'Ivy last',
    age: 47,
    birthdate: new Date(1976, 3, 28),
    actions: <button type="button">Delete</button>
  }
];

const meta: Meta<TableProps> = {
  title: 'Data and Tables/Table',
  component: Table,
  parameters: {
    importObject: 'Table',
    importPath: '@carlsberg/malty.organisms.table',
    docs: {
      description: {
        component:
          'For this component we are using an external library as our base table, you can check the docs here https://tanstack.com/table/v8'
      }
    }
  },
  argTypes: {
    headers: {
      control: 'object',
      description:
        'The headers prop represents the order in which the headers should appear in the table. We expect an array of objects to be passed in, where key is the name of the key in a row object, and header is the name of the header.'
    },
    rows: {
      control: 'object',
      description:
        'The rows prop is where you provide us with a list of all the rows that you want to render in the table. The only hard requirement is that this is an array of objects, and that each object has a unique id field available on it.'
    },
    dataTestId: {
      control: 'text',
      description: 'Table data-testid'
    },
    paginationIndex: {
      control: 'number',
      description: 'This is the page number, being 0 the first index. It is required if manualPagination is enabled'
    },
    paginationSize: {
      control: 'number',
      description: 'Number of rows to be displayed in a page'
    },
    onRowClick: {
      description: 'Function that will run when the user clicks on a row',
      control: 'none',
      table: {
        category: 'Events'
      }
    },
    isDraggable: {
      control: 'boolean',
      description: 'If true Rows are draggable'
    },
    allowSelection: {
      control: 'boolean',
      description: 'If true Rows are selectable'
    },
    defaultSorting: {
      control: 'object',
      description: 'This will be the default behaviour for the sorting at the beginning'
    },
    onSortingChange: {
      description:
        'This will return the SortingState when the column title is clicked. By providing this prop the manualSorting will be enabled so automatic sorting will be disabled, as you know we are using react-table and the library is managing the sorting automatically, this will disable this option',
      table: {
        category: 'Events'
      }
    },
    manualPagination: {
      control: 'object',
      description:
        'If this object is passed paginationIndex and the data for each page needs to be updated manually in every page change, onPaginationChange is now required',
      table: {
        type: {
          summary: 'ManualPagination',
          detail: `totalPagesCount: number - Total amount of pages \ntotalRecords: number - Total amount of elements`
        }
      }
    },
    size: {
      description: 'Size for table rows',
      options: Object.keys(TableSize),
      mapping: TableSize,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: TableSize.Medium
        }
      }
    },
    rowSelection: {
      description: 'Use this prop to define which rows are selected by default',
      if: { arg: 'allowSelection' }
    },
    rowSelectionDisabled: {
      description: 'Use this prop to define which rows are disabled by default',
      if: { arg: 'allowSelection' }
    },
    onRowSelect: {
      description: 'Use this prop to handle the selected rows if needed',
      if: { arg: 'allowSelection' },
      table: {
        category: 'Events'
      }
    },
    isLoading: {
      description: 'Use this prop to control the loading status',
      control: 'boolean',
      table: {
        category: 'State'
      }
    },
    loadingOverlayProps: {
      description: 'Set the Loading Overlay props',
      control: 'object',
      if: { arg: 'isLoading' }
    },
    onPaginationChange: {
      description: 'Function that will run when the table page changes',
      control: 'none',
      table: {
        category: 'Events'
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<TableProps>;

export const Base: Story = {
  args: {
    headers,
    rows,
    onRowClick: () => null,
    paginationSize: 10,
    className: '',
    isDraggable: false,
    size: TableSize.Medium,
    dataTestId: 'table',
    allowSelection: false,
    isLoading: false,
    onSortingChange: undefined
  }
};

export const Dnd: Story = {
  args: {
    ...Base.args,
    isDraggable: true
  }
};

export const Selection: Story = {
  args: {
    ...Base.args,
    allowSelection: true,
    rowSelection: { '1': true, '7': true, '8': true, '15': true },
    rowSelectionDisabled: { '1': true, '2': true }
  }
};

export const NoResultsFound: Story = {
  args: {
    ...Base.args,
    rows: []
  }
};

export const HeadersCenter: Story = {
  args: {
    ...Base.args,
    headers: headersCenter
  }
};

export const Sorted: Story = {
  args: {
    ...Base.args,
    defaultSorting: { id: 'name', desc: true }
  }
};

export const Loading: Story = {
  args: {
    ...Base.args,
    rows: [],
    isLoading: true,
    loadingOverlayProps: {
      text: 'Loading',
      color: LoadingColor.DigitalBlack
    }
  }
};

export default meta;
