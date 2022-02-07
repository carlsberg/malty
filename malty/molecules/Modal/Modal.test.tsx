import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
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
    onClick: () => alert('primay button pressed')
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
