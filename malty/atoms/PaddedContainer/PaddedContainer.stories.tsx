import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { PaddedContainer as PaddedContainerComponent, PaddedContainerProps } from '.';
import { PaddedContainerSize } from './PaddedContainer.types';

export default {
  title: 'Layout/Padded Container',
  component: PaddedContainerComponent,
  parameters: {
    importObject: 'PaddedContainer',
    importPath: '@carlsberggroup/malty.atoms.padded-container'
  },
  argTypes: {
    padding: {
      options: Object.values(PaddedContainerSize),
      description: 'PaddedContainer padding size',
      table: {
        defaultValue: {
          summary: 'PaddedContainerSize.None'
        }
      },
      control: {
        type: 'radio'
      }
    },
    ...generateStorybookSpacing()
  }
} as Meta;

const Template: Story<PaddedContainerProps> = (args) => (
  <PaddedContainerComponent {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Sodales ut etiam sit amet nisl purus. Rutrum quisque non
    tellus orci ac auctor augue mauris. A pellentesque sit amet porttitor eget dolor morbi non. Viverra vitae congue eu
    consequat ac felis donec et odio. Tortor vitae purus faucibus ornare suspendisse sed nisi. Accumsan tortor posuere
    ac ut consequat semper. Semper risus in hendrerit gravida rutrum. Est ante in nibh mauris cursus mattis molestie.
    Tellus elementum sagittis vitae et leo. Scelerisque fermentum dui faucibus in. Porttitor rhoncus dolor purus non
    enim praesent elementum facilisis leo. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.
    Arcu risus quis varius quam. Volutpat ac tincidunt vitae semper. Donec adipiscing tristique risus nec.
  </PaddedContainerComponent>
);

export const PaddedContainer = Template.bind({});
PaddedContainer.args = {
  padding: PaddedContainerSize.None
};
