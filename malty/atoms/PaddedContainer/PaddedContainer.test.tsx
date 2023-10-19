import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { PaddedContainer } from '.';

const defaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis at tellus at urna condimentum mattis. Enim nunc faucibus a pellentesque. Viverra justo nec ultrices dui sapien. Habitasse platea dictumst vestibulum rhoncus est. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Tristique et egestas quis ipsum. Quis ipsum suspendisse ultrices gravida dictum. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.';
const newText = 'New test text';

describe('paddedContainer', () => {
  it('should render with correct text', () => {
    const { rerender } = render(<PaddedContainer>{defaultText}</PaddedContainer>);
    expect(screen.getByText(defaultText)).toBeVisible();

    rerender(<PaddedContainer>{newText}</PaddedContainer>);
    expect(screen.getByText(newText)).toBeVisible();
  });
});
