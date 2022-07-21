import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Meta, Story } from '@storybook/react';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Datepicker as DatepickerComponent } from './Datepicker';
import { DatepickerProps } from './Datepicker.types';

export default {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.molecules.datepicker',
    variants: ['range', 'readonly', 'disabled']
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
      control: {
        type: 'boolean'
      },
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

  const theme = useContext(ThemeContext) || defaultTheme;

  const CAPTIONS = [
    { color: 'white', copy: 'Today', border: theme.colors.colours.default['digital-black'].value },
    { color: theme.colors.colours.default['digital-black'].value, copy: 'Selected' }
  ];

  const PRIMARY_ACTION = {
    copy: 'Apply date',
    action: () => undefined
  };

  const SECONDARY_ACTION = {
    copy: 'Cancel',
    action: () => undefined
  };

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
    <div style={{ height: '580px' }}>
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
        captions={CAPTIONS}
        primaryAction={PRIMARY_ACTION}
        secondaryAction={SECONDARY_ACTION}
      />
    </div>
  );
};

export const Datepicker = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'disabled':
    Datepicker.args = {
      label: 'Select date',
      disabled: true
    };
    break;
  case 'readonly':
    Datepicker.args = {
      label: 'Select date',
      readOnly: true
    };
    break;
  case 'range':
    Datepicker.args = {
      label: 'Select date',
      selectsRange: true
    };
    break;
  default:
    Datepicker.args = { label: 'Select date' };
    break;
}
