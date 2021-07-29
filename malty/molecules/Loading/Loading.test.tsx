import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Loading } from './Loading';
import { LoadingStatus, SizeTypes } from './Loading.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('input', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Loading text="Loading..." size={SizeTypes.Medium} status={LoadingStatus.Pending} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(<Loading text={'Loading...'} size={SizeTypes.Medium} status={LoadingStatus.Pending}  />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('render in large view', () => {
    render(<Loading text={'Loading...'} size={SizeTypes.Large} status={LoadingStatus.Pending}  />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
