import { jsonRenderer, render, screen } from '@carlsberg/malty.utils.test';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Loading } from './Loading';
import { SizeTypes, LoadingStatus } from './Loading.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));


describe('input', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Loading text='Loading...' size={SizeTypes.Medium} status={LoadingStatus.Default} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(
        <Loading text={'Loading...'} size={SizeTypes.Medium} status={LoadingStatus.Default} />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('render in large view', () => {
    render(
        <Loading text={'Loading...'} size={SizeTypes.Large} status={LoadingStatus.Default} />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

});
