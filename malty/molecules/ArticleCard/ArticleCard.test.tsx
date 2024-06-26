import { render } from '@carlsberggbs/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { ArticleCard } from './ArticleCard';

const titleText = 'Title';
const description = 'SubTitle';

describe('ArticleCard', () => {
  it('renders with correct content', () => {
    render(<ArticleCard title={titleText} description={description} imageSrc="https://placehold.co/300x180" />);
    expect(screen.getByText(titleText)).not.toBeNull();
    expect(screen.getByText(description)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(
      <ArticleCard
        title={titleText}
        description={description}
        imageSrc="https://placehold.co/300x180"
        onCardClick={onClick}
        dataTestId="article-card"
      />
    );
    fireEvent.click(screen.getByTestId('article-card'));
    fireEvent.click(screen.getByText(titleText));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
