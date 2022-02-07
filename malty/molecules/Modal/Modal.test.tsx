import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Modal } from './Modal';

const title = 'Headline';
const text = `Paragraph block to support main headline(optional)
And…it can have 2 lines, more than that is just boring…`;
const icon = IconNamesTypes.ItemCheck;
const image = 'http://placehold.it/120x120&text=image1';
const buttons = [
  {
    variant: ButtonStyle.Secondary,
    label: 'Cancel',
    onClick: () => alert('primay button pressed')
  },
  {
    variant: ButtonStyle.Primary,
    label: 'Confirm',
    onClick: () => {
      const testText = document.createElement('p');
      testText.append('Clicked primary');
      document.body.appendChild(testText);
    }
  }
];

describe('does molecule modal match snapshot?', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Modal open setOpen={() => false} title={title} text={text} icon={icon} image={image} buttons={buttons} />
    );
    expect(view).toMatchSnapshot();
  });
});

describe('Triggers the passed function when clicking the button', () => {
  it('opens when clicking a nav item with sub items', () => {
    render(<Modal open setOpen={() => false} title={title} text={text} icon={icon} image={image} buttons={buttons} />);
    const primaryButton = screen.getByText('Confirm');

    fireEvent(
      primaryButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.getByText('Clicked primary')).toBeInTheDocument();
  });
});
