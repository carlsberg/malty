import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';

const defaultText = 'Link text';
const newText = 'New text';

describe('link', () => {
  it('should render with correct text', () => {
    const { rerender } = render(<Link text={defaultText} url="https://www.google.com/" />);

    expect(screen.getByText(defaultText)).toBeInTheDocument();

    rerender(<Link text={newText} url="https://www.google.com/" />);

    expect(screen.getByText(newText)).toBeInTheDocument();
  });

  it('should render with correct text via child', () => {
    render(<Link url="https://www.google.com/">{defaultText}</Link>);

    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it('should render with correct dataTestId', () => {
    render(
      <Link dataTestId="link" url="https://www.google.com/">
        {defaultText}
      </Link>
    );

    expect(screen.getByTestId('link')).toBeInTheDocument();
  });

  it('should click on defined url', () => {
    const onClick = jest.fn();

    render(
      <Link dataTestId="link" url="https://www.google.com/" onClick={onClick}>
        {defaultText}
      </Link>
    );

    userEvent.click(screen.getByTestId('link'), undefined, { skipPointerEventsCheck: true });

    expect(screen.getByTestId('link')).toHaveAttribute('href', 'https://www.google.com/');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not access link when disabled', () => {
    const onClick = jest.fn();

    render(
      <Link dataTestId="link" url="https://www.google.com/" disabled>
        {defaultText}
      </Link>
    );

    userEvent.click(screen.getByTestId('link'), undefined, { skipPointerEventsCheck: true });

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
