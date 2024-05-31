import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaddedContainer } from './PaddedContainer';
import { PaddedContainerProps, PaddedContainerSize } from './PaddedContainer.types';

const meta: Meta<PaddedContainerProps> = {
  title: 'Layout/Padded Container',
  component: PaddedContainer,
  parameters: {
    importObject: 'PaddedContainer',
    importPath: '@carlsberggbs/malty.atoms.padded-container'
  },
  render: (args) => (
    <PaddedContainer {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Sodales ut etiam sit amet nisl purus. Rutrum
      quisque non tellus orci ac auctor augue mauris. A pellentesque sit amet porttitor eget dolor morbi non. Viverra
      vitae congue eu consequat ac felis donec et odio. Tortor vitae purus faucibus ornare suspendisse sed nisi.
      Accumsan tortor posuere ac ut consequat semper. Semper risus in hendrerit gravida rutrum. Est ante in nibh mauris
      cursus mattis molestie. Tellus elementum sagittis vitae et leo. Scelerisque fermentum dui faucibus in. Porttitor
      rhoncus dolor purus non enim praesent elementum facilisis leo. Velit aliquet sagittis id consectetur purus ut
      faucibus pulvinar elementum. Arcu risus quis varius quam. Volutpat ac tincidunt vitae semper. Donec adipiscing
      tristique risus nec.
    </PaddedContainer>
  ),
  argTypes: {
    padding: {
      options: Object.values(PaddedContainerSize),
      description: 'PaddedContainer padding size',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: PaddedContainerSize.None
        }
      },
      control: 'radio'
    },
    dataTestId: {
      control: 'text',
      description: 'PaddedContainer data-testid'
    },
    children: {
      description: 'Content of the component',
      table: {
        type: {
          summary: 'string | JSX.Element | undefined'
        }
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<PaddedContainerProps>;

export const Base: Story = {
  args: {
    padding: PaddedContainerSize.None,
    dataTestId: 'paddedContainer'
  }
};

export default meta;
