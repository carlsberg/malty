import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Pill } from './Pill';

describe('pill', () => {
  const text = 'Pill text';
  const iconDataTestId = 'carlsberg-icon';

  it('should render the component correctly', () => {
    render(<Pill text={text} icon={<CarlsbergFilled dataTestId={iconDataTestId} />} />);

    expect(screen.getByText(text)).toBeVisible();
    expect(screen.getByTestId(iconDataTestId)).toBeVisible();
  });

  it('should not render the component with the text and icon', () => {
    render(<Pill />);

    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(screen.queryByTestId(iconDataTestId)).not.toBeInTheDocument();
  });

  it('should render only text', () => {
    render(<Pill text={text} />);

    expect(screen.getByText(text)).toBeVisible();
    expect(screen.queryByTestId(iconDataTestId)).not.toBeInTheDocument();
  });

  it('should render only Icon', () => {
    render(<Pill icon={<CarlsbergFilled dataTestId={iconDataTestId} />} />);

    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(screen.getByTestId(iconDataTestId)).toBeVisible();
  });
});
