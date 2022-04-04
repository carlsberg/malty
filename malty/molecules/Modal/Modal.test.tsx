import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React, { useState } from 'react';
import { Modal } from './Modal';

const title = 'Headline';
const text = (
  <p>Paragraph block to support main headline(optional) And…it can have 2 lines, more than that is just boring…</p>
);
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
    const view = jsonRenderer(<Modal open onClose={() => false} title={title} content={text} actions={buttons} />);
    expect(view).toMatchSnapshot();
  });
});

describe('Triggers the passed function when clicking the button', () => {
  it('OnClick function passed successfully', () => {
    render(<Modal open onClose={() => false} title={title} content={text} actions={buttons} />);
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

describe('Does the modal close?', () => {
  it('Modal closed correctly', () => {
    const ModalTest = () => {
      const [open, setOpen] = useState(true);
      return <Modal open={open} onClose={() => setOpen(false)} title={title} content={text} actions={buttons} />;
    };

    render(
      <>
        <ModalTest />
      </>
    );

    const closeIcon = screen.getAllByTestId('svg-component') && screen.getAllByTestId('svg-component')[0];

    fireEvent(
      closeIcon,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.queryByText('Headline')).not.toBeInTheDocument();
  });
});
