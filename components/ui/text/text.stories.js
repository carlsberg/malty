import React from 'react';

import { Text } from './text';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Text',
};
