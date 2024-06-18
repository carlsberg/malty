import { MaltyThemeProvider } from '@carlsberggbs/malty.theme.malty-theme-provider';
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

const AllTheProviders: React.FC = ({ children }) => {
  return <MaltyThemeProvider theme="global">{children}</MaltyThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const jsonRenderer = (ui: React.ReactNode) => renderer.create(<AllTheProviders>{ui}</AllTheProviders>).toJSON();

export { customRender as render, jsonRenderer };
