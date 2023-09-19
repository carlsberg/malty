import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { ActionButton } from '@carlsberggroup/malty.molecules.product-quantity-actions';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { ProductCard } from './ProductCard';

const titleText = 'This is a Title';
const paragraphText = 'This is a test';
const sku = 'Sku: 12512 512';
const heroScr = 'https://placehold.co/300x180';
const actionButton: ActionButton = {
  color: ButtonColor.DigitalBlack,
  text: 'Add to cart',
  onClick: jest.fn(),
  style: ButtonStyle.Primary
};
const defaultBody = (
  <div>
    <h1>{titleText}</h1>
    <p>{paragraphText}</p>
  </div>
);

describe('ProductCard', () => {
  it('should render with correct content', () => {
    render(<ProductCard imageSrc={heroScr} title={titleText} sku={sku} actionButton={actionButton} />);
    expect(screen.getByText(titleText)).not.toBeNull();
    expect(screen.getByText(sku)).not.toBeNull();
  });

  it('should call function on click', () => {
    const onClick = jest.fn();
    render(
      <ProductCard
        onProductClick={onClick}
        imageSrc={heroScr}
        title={titleText}
        actionButton={actionButton}
        dataTestId="product-card"
      />
    );
    fireEvent.click(screen.getByTestId('product-card-title'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
