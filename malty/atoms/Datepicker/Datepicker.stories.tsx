import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Datepicker as DatepickerComponent } from './Datepicker';

export default {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  parameters: {
    importObject: 'Datepicker',
    importPath: '@carlsberggroup/malty.atoms.datepicker'
  },
  argTypes: {}
} as Meta;

const Template: Story = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{ height: '300px' }}>
      <DatepickerComponent onChange={(date: Date) => setStartDate(date)} startDate={startDate} />
    </div>
  );
};

export const Datepicker = Template.bind({});
Datepicker.args = {};
