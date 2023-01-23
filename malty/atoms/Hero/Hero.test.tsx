import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
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
        style={CardStyle.Plain}
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
        style={CardStyle.Plain}
        orientation={CardOrientation.Portrait}
        onClick={onClick}
      />
    );
    fireEvent.click(screen.getByTestId('card-element'));
    fireEvent.click(screen.getByText(titleText));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
