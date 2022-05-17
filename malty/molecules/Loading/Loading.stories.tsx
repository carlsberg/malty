import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Loading as LoadingComponent } from './Loading';
import { LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

export default {
  title: 'Progress Indicators/Loading',
  component: LoadingComponent,
  parameters: {
    importObject: 'Loading',
    importPath: '@carlsberggroup/malty.molecules.loading'
  },
  argTypes: {
    text: { control: 'text', description: 'label to be displayed ' },
    size: {
      options: Object.values(LoadingSize),
      control: {
        type: 'select'
      },
      description: 'Size of the icon'
    },
    status: {
      options: Object.values(LoadingStatus),
      control: {
        type: 'select'
      },
      description: 'Status of the icon'
    },
    dataQaId: {
      control: 'text',
      description: 'Alert data-qi-id, can be'
    }
  }
} as Meta;

const Template: Story<LoadingProps> = ({ text, size, status, dataQaId }: LoadingProps) => (
  <LoadingComponent text={text} size={size} status={status} dataQaId={dataQaId} />
);

export const Loading = Template.bind({});
Loading.args = {
  size: LoadingSize.Small,
  text: 'Loading...',
  status: LoadingStatus.Pending,
  dataQaId: 'loading'
};
