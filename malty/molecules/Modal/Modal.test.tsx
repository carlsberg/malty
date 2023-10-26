import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { ActionButtonProps } from './Modal.types';

const title = 'Headline';
const text = (
  <p>Paragraph block to support main headline(optional) And…it can have 2 lines, more than that is just boring…</p>
);
const buttons: ActionButtonProps[] = [
  {
    key: 'pprimary',
    style: ButtonStyle.Secondary,
    text: 'Cancel',
    onClick: jest.fn()
  },
  {
    key: 'seconday',
    style: ButtonStyle.Primary,
    text: 'Confirm',
    onClick: () => {
      const testText = document.createElement('p');
      testText.append('Clicked primary');
      document.body.appendChild(testText);
    }
  }
];

describe('modal', () => {
  it('should have OnClick function working successfully', () => {
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

  it('should have modal closed correctly', () => {
    const ModalTest = () => {
      const [open, setOpen] = useState(true);
      return <Modal open={open} onClose={() => setOpen(false)} title={title} content={text} actions={buttons} />;
    };

    render(<ModalTest />);

    const closeIcon = screen.getAllByTestId('icon-component') && screen.getAllByTestId('icon-component')[0];

    fireEvent(
      closeIcon,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.queryByText('Headline')).not.toBeInTheDocument();
  });

  it('should disable close icon when dismissible is set as false', () => {
    render(<Modal open onClose={() => false} title={title} content={text} actions={buttons} dismissible={false} />);

    const closeIcon = screen.queryByTestId('icon-component');

    expect(closeIcon).not.toBeInTheDocument();
  });

  it('should render with the correct headline', () => {
    render(<Modal open onClose={() => false} title={title} content={text} actions={buttons} dismissible={false} />);

    const headline = screen.getByText(title);

    expect(headline).toBeInTheDocument();
  });

  it('should render with the correct content', () => {
    render(<Modal open onClose={() => false} title={title} content={text} actions={buttons} dismissible={false} />);

    const content = screen.getByText(
      'Paragraph block to support main headline(optional) And…it can have 2 lines, more than that is just boring…'
    );

    expect(content).toBeInTheDocument();
  });
});
