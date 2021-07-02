import React from 'react';
import renderer from 'react-test-renderer';
import { Overlay } from '.';

describe('overlay', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Overlay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
