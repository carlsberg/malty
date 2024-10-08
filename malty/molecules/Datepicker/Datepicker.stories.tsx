import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Datepicker, DATE_PICKER_DEFAULT_FORMAT } from './Datepicker';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

const DatepickerComponent = (props: DatepickerProps) => {
  const { selectsRange, dateFormat, startDate, endDate, popperZIndex } = props;
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
  title: 'Forms/Datepicker',
  component: Datepicker,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberg/malty.molecules.datepicker'
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
      description: 'Action to perform when clicking a calendar day',
      table: {
        category: 'Events'
      }
    },
    onClose: {
      description: 'Action to perform when datepicker is closed',
      table: {
        category: 'Events'
      }
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
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: DatepickerSize.Medium
        }
      }
    },
    disabled: {
      description: 'Disable datepicker',
      control: 'boolean',
      table: {
        category: 'State'
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'ReadOnly datepicker',
      table: {
        category: 'State'
      }
    },
    selectsRange: {
      description: 'Enable date range selection. This will set the input as readonly',
      control: 'boolean'
    },
    inline: {
      description: 'Display calendar without input',
      control: 'boolean',
      table: {
        category: 'Styling'
      }
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
      control: 'object',
      table: {
        category: 'Events'
      }
    },
    secondaryAction: {
      description: 'Cancel apply date',
      control: 'object',
      table: {
        category: 'Events'
      }
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
      description: 'Disables the border and padding from the calendar portal only if inline is true',
      table: {
        category: 'Styling'
      }
    },
    popperZIndex: {
      control: 'number',
      description: 'Controls the z-index of the calendar',
      table: {
        category: 'Styling'
      },
      ...generateStorybookSpacing()
    }
  }
};

type Story = StoryObj<DatepickerProps>;

export const Base: Story = {
  args: {
    label: 'Select date',
    required: false,
    startDate: new Date(),
    dateFormat: DATE_PICKER_DEFAULT_FORMAT,
    size: DatepickerSize.Medium,
    dataTestId: 'datepicker',
    shouldCloseOnSelect: true
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
