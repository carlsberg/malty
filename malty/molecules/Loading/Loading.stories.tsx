import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Loading } from './Loading';
import { LoadingProps, SizeTypes, LoadingStatus } from './Loading.types';

export default {
  title: 'Molecules/Loading',
  component: Loading,
  argTypes: {
    text: { control: 'text' },
    size: {
      options: Object.values(SizeTypes),
      control: {
        type: 'select'
      }
    },
    status: {
      options: Object.values(LoadingStatus),
      control: {
        type: 'select'
      }
    },
  }
} as Meta;

const Template: Story<LoadingProps> = ({
  text,
  size,
  status,
}: LoadingProps) => {
  return (
    <Loading
      text={text}
      size={size}
      status={status}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  size: SizeTypes.Medium,
  text: 'Loading...',
  status: LoadingStatus.Default
};
