import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { StockStatus } from './StockStatus';

const label = 'In stock';
const dataTestId = 'stock';
const availability = 'Available: 12/03/2021';

describe('StockStatus', () => {
  it('should render content correctly', () => {
    render(<StockStatus label={label} dataTestId={dataTestId} />);

    expect(screen.getByText(label)).toBeVisible();
    expect(screen.queryByTestId(`${dataTestId}-info`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}-availability`)).not.toBeInTheDocument();
  });

  it('should render info dot correctly', () => {
    render(<StockStatus label={label} dataTestId={dataTestId} stockColor={TextColor.Success} />);

    expect(screen.getByTestId(`${dataTestId}-info`)).toBeVisible();
  });

  it('should render available text correctly', () => {
    render(<StockStatus label={label} dataTestId={dataTestId} availability={availability} />);

    expect(screen.getByText(availability)).toBeVisible();
  });
});
