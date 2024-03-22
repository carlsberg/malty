import { Meta, StoryObj } from '@storybook/react';
import { MaltyThemeProvider } from './MaltyThemeProvider';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import cadiColors from './themes2/cadi2.json';

const meta: Meta<MaltyThemeProviderProps> = {
  component: MaltyThemeProvider,
  title: 'theme/Malty Theme Provider',
  parameters: {
    importObject: 'MaltyThemeProvider',
    importPath: '@carlsberggroup/malty/theme.malty-theme-provider'
  },
  argTypes: {}
};

type Story = StoryObj<MaltyThemeProviderProps>;

export const Base: Story = {
  args: {}
};

export const CadiColors: Story = {
  args: {
    colors: cadiColors
  }
};

export default meta;
