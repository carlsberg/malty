import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Loading as LoadingComponent } from './Loading';
import { LoadingProps, LoadingStatus, SizeTypes } from './Loading.types';

export default {
  title: 'Molecules/Loading',
  component: LoadingComponent,
  parameters: {
    importObject: 'Loading',
    importPath: '@carlsberggroup/malty.molecules.loading'
  },
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
    }
  }
} as Meta;

const Template: Story<LoadingProps> = ({ text, size, status }: LoadingProps) => (
  <LoadingComponent text={text} size={size} status={status} />
);

export const Loading = Template.bind({});
Loading.args = {
  size: SizeTypes.Medium,
  text: 'Loading...',
  status: LoadingStatus.Pending
};
