import { render, RenderOptions } from '@testing-library/react';
import React, { ComponentType, ReactElement } from 'react';
import renderer from 'react-test-renderer';

const AllTheProviders: React.FC = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

const jsonRenderer = (ui: React.ReactNode) => renderer.create(<AllTheProviders>{ui}</AllTheProviders>).toJSON();

export { customRender as render, jsonRenderer };
