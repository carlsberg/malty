import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Modal } from './Modal';

const title = 'Headline';
const text = (
  <p>
    Paragraph block to support main headline(optional) And…it can have 2 lines, more than that is
    just boring…
  </p>
);
const buttons = [
  {
    variant: ButtonStyle.Secondary,
    label: 'Cancel',
    onClick: jest.fn(),
  },
  {
    variant: ButtonStyle.Primary,
    label: 'Confirm',
    onClick: () => {
      const testText = document.createElement('p');
      testText.append('Clicked primary');
      document.body.appendChild(testText);
    },
  },
];

describe('modal', () => {
  it('OnClick function passed successfully', () => {
    render(<Modal open onClose={() => false} title={title} content={text} actions={buttons} />);
    const primaryButton = screen.getByText('Confirm');

    fireEvent(
      primaryButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByText('Clicked primary')).toBeInTheDocument();
  });

  it('Modal closed correctly', () => {
    function ModalTest() {
      const [open, setOpen] = useState(true);
      return (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={title}
          content={text}
          actions={buttons}
        />
      );
    }

    render(<ModalTest />);

    const closeIcon =
      screen.getAllByTestId('icon-component') && screen.getAllByTestId('icon-component')[0];

    fireEvent(
      closeIcon,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.queryByText('Headline')).not.toBeInTheDocument();
  });
});
