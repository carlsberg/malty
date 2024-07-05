import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';

type MagicLinkProps = {
  href?: string;
  magicAttribute?: string;
};

const MagicLink = ({ href, magicAttribute }: MagicLinkProps) => {
  return (
    <a href={href} data-magic-attribute={magicAttribute} data-testid="magic-link">
      MagicLink
    </a>
  );
};

describe('link', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const onClick = jest.fn();
  const defaultText = 'Link text';
  const newText = 'New text';
  const url = 'https://www.google.com/';

  it('should render with correct text', () => {
    const { rerender } = render(<Link href={url}>{defaultText}</Link>);

    expect(screen.getByText(defaultText)).toBeInTheDocument();

    rerender(<Link href={url}>{newText}</Link>);

    expect(screen.getByText(newText)).toBeInTheDocument();
  });

  it('should render with correct dataTestId', () => {
    render(
      <Link dataTestId="link" href={url}>
        {defaultText}
      </Link>
    );

    expect(screen.getByTestId('link')).toBeInTheDocument();
  });

  it('should click on defined url', () => {
    render(
      <Link dataTestId="link" href={url} onClick={onClick}>
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
      <Link dataTestId="link" href={url} disabled>
        {defaultText}
      </Link>
    );

    userEvent.click(screen.getByTestId('link'), undefined, { skipPointerEventsCheck: true });

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render the link component with the properties of the component passed on the "as" prop', () => {
    const magicAttribute = 'magicAttr';
    render(<Link as={MagicLink} href={url} magicAttribute={magicAttribute} />);

    const link = screen.getByTestId('magic-link');

    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('data-magic-attribute', magicAttribute);
  });
});
