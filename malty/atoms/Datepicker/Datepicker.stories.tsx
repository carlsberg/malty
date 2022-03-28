import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Datepicker as DatepickerComponent } from './Datepicker';
import { DatepickerProps } from './Datepicker.types';

export default {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.atoms.datepicker'
  },
  argTypes: {
    label: {
      description: 'The datepicker input label',
      control: {
        type: 'string'
      }
    },
    startDate: {
      description: 'Initial selected date',
      control: {
        type: 'date'
      }
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
    locale: {
      description: 'iso language code',
      control: {
        type: 'string'
      }
    }
  }
} as Meta;

const Template: Story<DatepickerProps> = ({ label }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{ height: '400px' }}>
      <DatepickerComponent label={label} onChange={(date: Date) => setStartDate(date)} startDate={startDate} />
    </div>
  );
};

export const Datepicker = Template.bind({});
Datepicker.args = { label: 'Select date' };
