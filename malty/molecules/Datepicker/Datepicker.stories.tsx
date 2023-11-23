import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Datepicker, DATE_PICKER_DEFAULT_FORMAT } from './Datepicker';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

const DatepickerComponent = (props: DatepickerProps) => {
  const { selectsRange, dateFormat, startDate, endDate } = props;
  const [newStartDate, setNewStartDate] = useState<Date | null>(startDate);

  useEffect(() => {
    setNewStartDate(startDate);
  }, [startDate]);

  const [newEndDate, setNewEndDate] = useState<Date | null | undefined>(endDate);

  useEffect(() => {
    setNewEndDate(endDate);
  }, [endDate]);

  const onChange = (date: (Date | null) | [Date | null, Date | null]) => {
    let start;
    let end;

    if (Array.isArray(date)) {
      [start, end] = date;
      setNewStartDate(start);
      setNewEndDate(end);
    }
  };

  const onChangeStartDate = (date: (Date | null) | [Date | null, Date | null]) => {
    if (!Array.isArray(date)) {
      setNewStartDate(date);
    }
  };

  return (
    <div style={{ height: '560px' }}>
      <Datepicker
        {...props}
        dateFormat={dateFormat === '' ? DATE_PICKER_DEFAULT_FORMAT : dateFormat}
        startDate={newStartDate}
        endDate={newEndDate}
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
      description: 'Initial selected date',
      control: 'date'
    },
    endDate: {
      description: 'Final selected date. Is only visible if the selectRanges prop is set to true',
      control: 'date',
      if: { arg: 'selectsRange' }
    },
    onChange: {
      description: 'Action to perform when clicking a calendar day'
    },
    onClose: {
      description: 'Action to perform when datepicker is closed'
    },
    minDate: {
      description: 'Disable days before defined min. date',
      control: 'date'
    },
    maxDate: {
      description: 'Disable days after defined max. date',
      control: 'date'
    },
    dateFormat: {
      description: `Custom date format, default is ${DATE_PICKER_DEFAULT_FORMAT}`,
      control: 'text'
    },
    excludeDates: {
      description: 'Disable array of days',
      control: 'array'
    },
    size: {
      description: 'Button size. Options are',
      options: Object.values(DatepickerSize),
      control: 'select'
    },
    disabled: {
      description: 'Disable datepicker',
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean',
      description: 'ReadOnly datepicker'
    },
    selectsRange: {
      description: 'Enable date range selection. This will set the input as readonly',
      control: 'boolean'
    },
    inline: {
      description: 'Display calendar without input',
      control: 'boolean'
    },
    placeholderText: {
      description: 'Input placeholder',
      control: 'text'
    },
    locale: {
      description: 'ISO language code',
      control: 'text'
    },
    captions: {
      description: 'Captions for datepicker',
      control: 'array'
    },
    primaryAction: {
      description: 'Apply date',
      control: 'object'
    },
    secondaryAction: {
      description: 'Cancel apply date',
      control: 'object'
    },
    shouldCloseOnSelect: {
      description: 'Whether the datepicker should close automatically upon selection',
      control: 'boolean'
    },
    withPortal: {
      description: 'Whether the datepicker should open within a [Portal](https://reactjs.org/docs/portals.html)',
      control: 'boolean'
    },
    required: {
      control: 'boolean',
      description: 'Makes the Datepicker required to fill'
    },
    withoutBorder: {
      control: 'boolean',
      description: 'Disables the border and padding from the calendar portal only if inline is true'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<DatepickerProps>;

export const Base: Story = {
  args: {
    label: 'Select date',
    required: false,
    startDate: new Date(),
    dateFormat: DATE_PICKER_DEFAULT_FORMAT
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
    endDate: new Date(),
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
