import { render } from '@testing-library/react';
import { BasicText } from './text.composition';

describe('text', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicText />);
    const rendered = getByText('this is a text block');
    expect(rendered).toBeTruthy();
  });

})