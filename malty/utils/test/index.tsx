import { MaltyThemeProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { render, RenderOptions } from '@testing-library/react';
import React, { ComponentType, ReactElement } from 'react';
import renderer from 'react-test-renderer';

const AllTheProviders: React.FC = ({ children }) => <MaltyThemeProvider theme="global">{children}</MaltyThemeProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

const jsonRenderer = (ui: React.ReactNode) => renderer.create(<AllTheProviders>{ui}</AllTheProviders>).toJSON();

export * from '@testing-library/react';
export { customRender as render, jsonRenderer };
