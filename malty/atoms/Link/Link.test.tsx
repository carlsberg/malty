import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';

const defaultText = 'Link text';
const newText = 'New text';

describe('link', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const onClick = jest.fn();
  const url = 'https://www.google.com/';

  it('should render with correct text', () => {
    const { rerender } = render(<Link text={defaultText} url={url} />);

    expect(screen.getByText(defaultText)).toBeInTheDocument();

    rerender(<Link text={newText} url={url} />);

    expect(screen.getByText(newText)).toBeInTheDocument();
  });

  it('should render with correct text via child', () => {
    render(<Link url={url}>{defaultText}</Link>);

    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it('should render with correct dataTestId', () => {
    render(
      <Link dataTestId="link" url={url}>
        {defaultText}
      </Link>
    );

    expect(screen.getByTestId('link')).toBeInTheDocument();
  });

  it('should click on defined url', () => {
    render(
      <Link dataTestId="link" url={url} onClick={onClick}>
        {defaultText}
      </Link>
    );
    const link = screen.getByTestId('link');

    userEvent.click(link, undefined, { skipPointerEventsCheck: true });

    expect(link).toHaveAttribute('href', url);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not access link when disabled', () => {
    render(
      <Link dataTestId="link" url={url} disabled>
        {defaultText}
      </Link>
    );

    userEvent.click(screen.getByTestId('link'), undefined, { skipPointerEventsCheck: true });

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
