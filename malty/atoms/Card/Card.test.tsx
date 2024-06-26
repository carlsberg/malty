import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Card } from './Card';
import { CardOrientation, CardStyle } from './Card.types';

const titleText = 'Title';
const paragraphText = 'This is a test';
const altText = 'Alt text';
const defaultHero = <img src="https://placehold.co/300x180" alt={altText} />;
const defaultBody = (
  <div>
    <h1>{titleText}</h1>
    <p>{paragraphText}</p>
  </div>
);

describe('Card', () => {
  it('renders with correct content', () => {
    render(
      <Card
        selected={false}
        cardHero={defaultHero}
        cardBody={defaultBody}
        cardStyle={CardStyle.Plain}
        orientation={CardOrientation.Portrait}
      />
    );
    expect(screen.getByText(titleText)).not.toBeNull();
    expect(screen.getByText(paragraphText)).not.toBeNull();
    expect(screen.getByAltText(altText)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(
      <Card
        dataTestId="card-element"
        selected={false}
        cardHero={defaultHero}
        cardBody={defaultBody}
        cardStyle={CardStyle.Plain}
        orientation={CardOrientation.Portrait}
        onClick={onClick}
      />
    );
    userEvent.click(screen.getByTestId('card-element'));
    userEvent.click(screen.getByText(titleText));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('disables onClick function when is disabled', () => {
    const onClick = jest.fn();
    render(
      <Card
        dataTestId="card-element"
        selected={false}
        cardHero={defaultHero}
        cardBody={defaultBody}
        cardStyle={CardStyle.Plain}
        orientation={CardOrientation.Portrait}
        onClick={onClick}
        disabled
      />
    );

    userEvent.click(screen.getByTestId('card-element'));
    userEvent.click(screen.getByText(titleText));
    expect(onClick).not.toHaveBeenCalled();
  });
});
