import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Datepicker as DatepickerComponent } from './Datepicker';
import { DatepickerProps } from './Datepicker.types';

export default {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.molecules.datepicker'
  },
  argTypes: {
    label: {
      description: 'The datepicker input label',
      control: {
        type: 'string'
      }
    },
    startDate: {
      description: 'Initial selected date'
    },
    onChange: {
      description: 'Action to perform when clicking a calendar day'
    },
    minDate: {
      description: 'disable days before defined min. date',
      control: {
        type: 'date'
      }
    },
    maxDate: {
      description: 'disable days after defined max. date',
      control: {
        type: 'date'
      }
    },
    dateFormat: {
      description: 'custom date format, default is MM/dd/yyyy',
      control: {
        type: 'string'
      }
    },
    excludeDates: {
      description: 'disable array of days',
      control: {
        type: 'array'
      }
    },
    disabled: {
      description: 'disable datepicker',
      control: {
        type: 'boolean'
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'readOnly datepicker'
    },
    selectsRange: {
      description: 'enable date range selection',
      control: {
        type: 'boolean'
      }
    },
    inline: {
      description: 'display calendar without input',
      control: {
        type: 'boolean'
      }
    },
    placeholderText: {
      description: 'input placeholder',
      control: {
        type: 'string'
      }
    },
    locale: {
      description: 'iso language code',
      control: {
        type: 'string'
      }
    }
  }
} as Meta;

const Template: Story<DatepickerProps> = ({
  label,
  minDate,
  maxDate,
  disabled,
  locale,
  excludeDates,
  placeholderText,
  selectsRange,
  dateFormat,
  readOnly
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (date: Date[] | Date) => {
    let start;
    let end;

    if (Array.isArray(date)) {
      [start, end] = date;
      setStartDate(start);
      setEndDate(end);
    }
  };

  return (
    <div style={{ height: '400px' }}>
      <DatepickerComponent
        label={label}
        onChange={selectsRange ? onChange : setStartDate}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        locale={locale}
        excludeDates={excludeDates}
        placeholderText={placeholderText}
        selectsRange={selectsRange}
        dateFormat={dateFormat}
        readOnly={readOnly}
      />
    </div>
  );
};

export const Datepicker = Template.bind({});
Datepicker.args = { label: 'Select date' };
