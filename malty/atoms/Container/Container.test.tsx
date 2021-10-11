import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Container } from '.';

const defaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis at tellus at urna condimentum mattis. Enim nunc faucibus a pellentesque. Viverra justo nec ultrices dui sapien. Habitasse platea dictumst vestibulum rhoncus est. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Tristique et egestas quis ipsum. Quis ipsum suspendisse ultrices gravida dictum. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.';
const newText = 'New test text';

describe('overlay', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Container>{defaultText}</Container>);
    expect(view).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    const { rerender } = render(<Container>{defaultText}</Container>);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Container>{newText}</Container>);
    expect(screen.getByText(newText)).not.toBeNull();
  });
});
