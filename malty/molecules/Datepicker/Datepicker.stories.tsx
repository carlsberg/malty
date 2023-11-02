import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Datepicker } from './Datepicker';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

const DatepickerComponent = ({ ...args }) => {
  const { selectsRange, dateFormat } = args;
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const onChange = (date: (Date | null) | [Date | null, Date | null]) => {
    let start;
    let end;

    if (Array.isArray(date)) {
      [start, end] = date;
      setStartDate(start);
      setEndDate(end);
    }
  };

  const onChangeStartDate = (date: (Date | null) | [Date | null, Date | null]) => {
    if (!Array.isArray(date)) {
      setStartDate(date);
    }
  };

  return (
    <div style={{ height: '560px' }}>
      <Datepicker
        {...args}
        dateFormat={dateFormat === '' ? 'MM/dd/yyyy' : dateFormat}
        startDate={startDate}
        endDate={endDate}
        onChange={selectsRange ? onChange : onChangeStartDate}
      />
    </div>
  );
};

const meta: Meta<DatepickerProps> = {
  component: Datepicker,
  title: 'Forms/Datepicker',
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.molecules.datepicker'
  },
  render: (args) => <DatepickerComponent {...args} />,
  argTypes: {
    label: {
      description: 'The datepicker input label',
      control: 'text'
    },
    startDate: {
      description: 'Initial selected date'
    },
    onChange: {
      description: 'Action to perform when clicking a calendar day'
    },
    minDate: {
      description: 'disable days before defined min. date',
      control: 'date'
    },
    maxDate: {
      description: 'disable days after defined max. date',
      control: 'date'
    },
    dateFormat: {
      description: 'custom date format, default is MM/dd/yyyy',
      control: 'text'
    },
    excludeDates: {
      description: 'disable array of days',
      control: 'array'
    },
    size: {
      description: 'Button size. Options are',
      options: Object.values(DatepickerSize),
      control: 'select'
    },
    disabled: {
      description: 'disable datepicker',
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean',
      description: 'readOnly datepicker'
    },
    selectsRange: {
      description: 'enable date range selection. This will set the input as readonly',
      control: 'boolean'
    },
    inline: {
      description: 'display calendar without input',
      control: 'boolean'
    },
    placeholderText: {
      description: 'input placeholder',
      control: 'text'
    },
    locale: {
      description: 'iso language code',
      control: 'text'
    },
    captions: {
      description: 'captions for datepicker',
      control: 'array'
    },
    primaryAction: {
      description: 'apply date',
      control: 'object'
    },
    secondaryAction: {
      description: 'cancel apply date',
      control: 'object'
    },
    shouldCloseOnSelect: {
      description: 'whether the datepicker should close automatically upon selection',
      control: 'boolean'
    },
    withPortal: {
      description: 'whether the datepicker should open within a [Portal](https://reactjs.org/docs/portals.html)',
      control: 'boolean'
    },
    required: {
      control: 'boolean',
      description: 'Makes the Datepicker required to fill'
    },
    withoutBorder: {
      control: 'boolean',
      description: 'Disables the border and padding from the calendar portal only if inline is true'
    }
  }
};

type Story = StoryObj<DatepickerProps>;

export const Base: Story = {
  args: {
    label: 'Select date',
    required: false,
    dateFormat: 'MM/dd/yyyy'
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export const Readonly: Story = {
  args: {
    ...Base.args,
    readOnly: true
  }
};

export const Range: Story = {
  args: {
    ...Base.args,
    selectsRange: true
  }
};

export const CaptionsAndActions: Story = {
  args: {
    ...Base.args,
    captions: [
      {
        label: 'Selected',
        color: Colors.DigitalBlack
      },
      {
        label: 'Today',
        color: Colors.SystemFail
      },
      {
        label: 'Available if you order until 5pm',
        color: Colors.White,
        borderColor: Colors.InformationIndirect,
        dotted: true
      },
      {
        label: 'Order placed',
        color: Colors.SystemSuccess
      }
    ],
    primaryAction: {
      label: 'Apply',
      action: () => true
    },
    secondaryAction: {
      label: 'Cancel',
      action: () => true
    }
  }
};

export default meta;
