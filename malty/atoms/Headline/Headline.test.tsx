import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Headline } from './Headline';

const text = 'this is a headline';
const testId = 'headline';

describe('Headline component', () => {
  it('should render with the correct text', () => {
    render(<Headline>{text}</Headline>);

    const rendered = screen.getByText(text);

    expect(rendered).toBeInTheDocument();
  });

  it('should have the assigned data test id', () => {
    render(<Headline dataTestId={testId}>{text}</Headline>);

    const rendered = screen.getByTestId(testId);

    expect(rendered).toBeInTheDocument();
  });
});
