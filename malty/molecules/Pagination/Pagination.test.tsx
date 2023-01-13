import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';
import { PaginationType } from './Pagination.types';

describe('pagination', () => {
  it('renders elements', () => {
    render(<Pagination currentPage={1} count={10} dataQaId="pagination" onChange={() => null} />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
  it('renders current page', () => {
    const currentPage = 3;
    render(
      <Pagination
        currentPage={currentPage}
        count={10}
        dataQaId="pagination"
        onChange={() => null}
      />
    );
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    const el = screen.getByText(currentPage);
    expect(el.innerHTML).toEqual(currentPage.toString());
  });
  it('renders input type', () => {
    const currentPage = 3;
    render(
      <Pagination
        currentPage={currentPage}
        count={10}
        type={PaginationType.Input}
        dataQaId="pagination"
        onChange={() => null}
      />
    );
    expect(screen.getByTestId('pagination-input')).toBeInTheDocument();
    const el = screen.getByDisplayValue(currentPage);
    expect(el.getAttribute('value')).toEqual(currentPage.toString());
  });
  it('calls onChange function', () => {
    const onChange = jest.fn();
    const currentPage = 1;
    render(
      <Pagination currentPage={currentPage} count={10} dataQaId="pagination" onChange={onChange} />
    );
    fireEvent.click(screen.getByTestId('pagination-button-next'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
