import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Datepicker as DatepickerComponent } from './Datepicker';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

export default {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.molecules.datepicker',
    variants: ['range', 'readonly', 'disabled', 'captionsAndActions']
  },
  argTypes: {
    label: {
      description: 'The datepicker input label',
      control: {
        type: 'text'
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
        type: 'text'
      }
    },
    excludeDates: {
      description: 'disable array of days',
      control: {
        type: 'array'
      }
    },
    size: {
      description: 'Button size. Options are',
      options: Object.values(DatepickerSize),
      table: {
        defaultValue: {
          summary: 'DatepickerSize.Medium'
        }
      },
      control: {
        type: 'select'
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
        type: 'text'
      }
    },
    locale: {
      description: 'iso language code',
      control: {
        type: 'text'
      }
    },
    captions: {
      description: 'captions for datepicker',
      control: {
        type: 'object'
      },
      defaultValue: []
    },
    primaryAction: {
      description: 'apply date',
      control: {
        type: 'object'
      }
    },
    secondaryAction: {
      description: 'cancel apply date',
      control: {
        type: 'object'
      }
    },
    shouldCloseOnSelect: {
      description: 'whether the datepicker should close automatically upon selection',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    withPortal: {
      description: 'whether the datepicker should open within a Portal',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    required: {
      control: 'boolean',
      description: 'Makes the Datepicker required to fill'
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
  readOnly,
  captions,
  inline,
  primaryAction,
  secondaryAction,
  shouldCloseOnSelect,
  size,
  required,
  dataTestId,
  withPortal
}) => {
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
      <DatepickerComponent
        label={label}
        onChange={selectsRange ? onChange : onChangeStartDate}
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
        captions={captions}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        inline={inline}
        shouldCloseOnSelect={shouldCloseOnSelect}
        size={size}
        required={required}
        dataTestId={dataTestId}
        withPortal={withPortal}
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
      disabled: true,
      required: false
    };
    break;
  case 'readonly':
    Datepicker.args = {
      label: 'Select date',
      readOnly: true,
      required: false
    };
    break;
  case 'range':
    Datepicker.args = {
      label: 'Select date',
      selectsRange: true,
      required: false
    };
    break;
  case 'captionsAndActions':
    Datepicker.args = {
      label: 'Select date',
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
    };
    break;
  default:
    Datepicker.args = { label: 'Select date', required: false };
    break;
}
