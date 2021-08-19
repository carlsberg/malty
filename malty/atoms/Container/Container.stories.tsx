import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Container, ContainerProps } from '.';
import { ContainerSizeType } from './Container.types';

export default {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    padding: {
      options: Object.values(ContainerSizeType),
      description: 'Container padding size',
      table: {
        defaultValue: {
          summary: 'None (0px)'
        }
      },
      control: {
        type: 'radio'
      }
    }
  }
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Sodales ut etiam sit amet nisl purus. Rutrum quisque non
    tellus orci ac auctor augue mauris. A pellentesque sit amet porttitor eget dolor morbi non. Viverra vitae congue eu
    consequat ac felis donec et odio. Tortor vitae purus faucibus ornare suspendisse sed nisi. Accumsan tortor posuere
    ac ut consequat semper. Semper risus in hendrerit gravida rutrum. Est ante in nibh mauris cursus mattis molestie.
    Tellus elementum sagittis vitae et leo. Scelerisque fermentum dui faucibus in. Porttitor rhoncus dolor purus non
    enim praesent elementum facilisis leo. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.
    Arcu risus quis varius quam. Volutpat ac tincidunt vitae semper. Donec adipiscing tristique risus nec.
  </Container>
);

export const Main = Template.bind({});
Main.args = {
  padding: ContainerSizeType.None
};
