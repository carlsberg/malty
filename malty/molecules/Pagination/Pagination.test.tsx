import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { LEFT_DOTS, RIGHT_DOTS } from './Pagination.helper';
import { PaginationTrigger, PaginationType } from './Pagination.types';

describe('Pagination', () => {
  const outsideButtonText = 'Click outside';
  const onChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(`Pagination type: ${PaginationType.Default}`, () => {
    it('should render the correct number of page buttons', () => {
      render(<Pagination count={5} currentPage={1} onChange={onChange} />);

      expect(screen.getAllByRole('button')).toHaveLength(7);
    });

    it('should disable the previous button on the first page', () => {
      render(<Pagination count={5} currentPage={1} onChange={onChange} />);

      expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
    });

    it('should disable the next button on the last page', () => {
      render(<Pagination count={5} currentPage={5} onChange={onChange} />);

      expect(screen.getByLabelText('Go to next page')).toBeDisabled();
    });

    it('should call onChange with the correct page number when a page button is clicked', () => {
      render(<Pagination count={5} currentPage={1} onChange={onChange} />);

      userEvent.click(screen.getByText('2'));

      expect(onChange).toHaveBeenCalledWith(2, PaginationTrigger.PageNr);
    });

    it('should call onChange with the correct page number when the previous button is clicked', () => {
      render(<Pagination count={5} currentPage={2} onChange={onChange} />);

      userEvent.click(screen.getByLabelText('Go to previous page'));

      expect(onChange).toHaveBeenCalledWith(1, PaginationTrigger.Prev);
    });

    it('should call onChange with the correct page number when the next button is clicked', () => {
      render(<Pagination count={5} currentPage={2} onChange={onChange} />);

      userEvent.click(screen.getByLabelText('Go to next page'));

      expect(onChange).toHaveBeenCalledWith(3, PaginationTrigger.Next);
    });

    it('should render right dots only', () => {
      render(<Pagination count={10} currentPage={1} onChange={onChange} dataTestId="pagination" />);

      expect(screen.queryByTestId(`pagination-${LEFT_DOTS}`)).not.toBeInTheDocument();
      expect(screen.getByTestId(`pagination-${RIGHT_DOTS}`)).toBeVisible();
    });

    it('should render left dots only', () => {
      render(<Pagination count={10} currentPage={10} onChange={onChange} dataTestId="pagination" />);

      expect(screen.getByTestId(`pagination-${LEFT_DOTS}`)).toBeVisible();
      expect(screen.queryByTestId(`pagination-${RIGHT_DOTS}`)).not.toBeInTheDocument();
    });

    it('should render both dots, left and rigth at the same time', () => {
      render(<Pagination count={10} currentPage={5} onChange={onChange} dataTestId="pagination" />);

      expect(screen.getByTestId(`pagination-${LEFT_DOTS}`)).toBeVisible();
      expect(screen.getByTestId(`pagination-${RIGHT_DOTS}`)).toBeVisible();
    });

    it('should not render dots if siblingCount is higher than total pages', () => {
      render(<Pagination count={10} currentPage={1} onChange={onChange} siblingCount={5} dataTestId="pagination" />);

      for (let i = 1; i <= 10; i++) {
        expect(screen.getByText(i)).toBeVisible();
      }
      expect(screen.queryByTestId(`pagination-${LEFT_DOTS}`)).not.toBeInTheDocument();
      expect(screen.queryByTestId(`pagination-${RIGHT_DOTS}`)).not.toBeInTheDocument();
    });

    it('should render dots if siblingCount is lower than total pages', () => {
      render(<Pagination count={15} currentPage={7} onChange={onChange} siblingCount={3} dataTestId="pagination" />);

      expect(screen.getByText(1)).toBeVisible();
      for (let i = 4; i <= 10; i++) {
        expect(screen.getByText(i)).toBeVisible();
      }
      expect(screen.getByText(15)).toBeVisible();
      expect(screen.getByTestId(`pagination-${LEFT_DOTS}`)).toBeVisible();
      expect(screen.getByTestId(`pagination-${RIGHT_DOTS}`)).toBeVisible();
    });

    it('should not render dots if siblingCount value is 3', () => {
      render(<Pagination count={10} currentPage={1} siblingCount={3} onChange={onChange} dataTestId="pagination" />);

      expect(screen.queryByTestId(`pagination-${LEFT_DOTS}`)).not.toBeInTheDocument();
      expect(screen.queryByTestId(`pagination-${RIGHT_DOTS}`)).not.toBeInTheDocument();
    });

    it('should render pagination component in disabled state', () => {
      render(<Pagination count={5} currentPage={1} onChange={onChange} disabled dataTestId="pagination" />);

      screen.getAllByRole('button').forEach((button) => {
        expect(button).toBeDisabled();
      });
    });
  });

  describe(`Pagination type: ${PaginationType.Compact}`, () => {
    const CompactPagination = ({ ...props }) => {
      const [currentPage, setCurrentPage] = useState(1);
      const handleOnChange = (page: string | number) => {
        setCurrentPage(Number(page));
        onChange(page);
      };

      return (
        <Pagination
          {...props}
          count={5}
          currentPage={currentPage}
          onChange={handleOnChange}
          type={PaginationType.Compact}
        />
      );
    };

    it('should render elements and changes pages correctly', () => {
      render(<CompactPagination />);

      expect(screen.getByText('1 of 5')).toBeVisible();
      expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
      expect(screen.getByLabelText('Go to next page')).not.toBeDisabled();

      for (let i = 0; i < 4; i++) {
        userEvent.click(screen.getByLabelText('Go to next page'));
      }

      expect(onChange).toHaveBeenCalledTimes(4);
      expect(screen.getByText('5 of 5')).toBeVisible();
      expect(screen.getByLabelText('Go to next page')).toBeDisabled();
      expect(screen.getByLabelText('Go to previous page')).not.toBeDisabled();
    });

    it('should render pagination component in disabled state', () => {
      render(<CompactPagination disabled />);

      expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
      expect(screen.getByLabelText('Go to next page')).toBeDisabled();
    });
  });

  describe(`Pagination type: ${PaginationType.Input}`, () => {
    it('should allow users to change pages when pressing Enter', () => {
      render(<Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />);

      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.type(input, '3');
      userEvent.type(input, '{enter}');

      expect(onChange).toHaveBeenCalledWith(3, PaginationTrigger.PageNr);
    });

    it('should allow users to change pages when clicking outside', () => {
      render(
        <>
          <Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />
          <button type="button">{outsideButtonText}</button>
        </>
      );

      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.type(input, '3');
      userEvent.click(screen.getByText(outsideButtonText));

      expect(onChange).toHaveBeenCalledWith(3, PaginationTrigger.PageNr);
    });

    it('should not allow users to enter an invalid page number when pressing Enter', () => {
      render(<Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />);

      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.type(input, '23');
      userEvent.type(input, '{enter}');

      expect(onChange).toHaveBeenCalledWith(10, PaginationTrigger.PageNr);

      userEvent.clear(input);
      userEvent.type(input, '-1');
      userEvent.type(input, '{enter}');

      expect(onChange).toHaveBeenCalledWith(1, PaginationTrigger.PageNr);
    });

    it('should not allow users to enter an invalid page number when clicking outside', () => {
      render(
        <>
          <Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />
          <button type="button">{outsideButtonText}</button>
        </>
      );

      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.type(input, '23');
      userEvent.click(screen.getByText(outsideButtonText));

      expect(onChange).toHaveBeenCalledWith(10, PaginationTrigger.PageNr);

      userEvent.clear(input);
      userEvent.type(input, '-1');
      userEvent.click(screen.getByText(outsideButtonText));

      expect(onChange).toHaveBeenCalledWith(1, PaginationTrigger.PageNr);
    });

    it('should remain the same page if value gets deleted when pressing outside', () => {
      render(<Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />);

      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.type(input, '{enter}');

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should remain the same page if value gets deleted when clicking outside', () => {
      render(
        <>
          <Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} />
          <button type="button">{outsideButtonText}</button>
        </>
      );
      const input = screen.getByDisplayValue(5);

      userEvent.clear(input);
      userEvent.click(screen.getByText(outsideButtonText));

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should display current page after changing the value from outside', () => {
      const buttonText = 'Increase page';
      const PaginationComponent = () => {
        const [currentPage, setCurrentPage] = useState(1);

        const handleIncreasePage = () => {
          setCurrentPage(currentPage + 1);
        };

        return (
          <>
            <Pagination count={10} currentPage={currentPage} onChange={onChange} type={PaginationType.Input} />
            <button type="button" onClick={handleIncreasePage}>
              {buttonText}
            </button>
          </>
        );
      };

      render(<PaginationComponent />);

      expect(screen.getByDisplayValue(1)).toBeVisible();

      userEvent.click(screen.getByText(buttonText));

      expect(screen.getByDisplayValue(2)).toBeVisible();
    });

    it('should render pagination component in disabled state', () => {
      render(<Pagination count={10} currentPage={5} onChange={onChange} type={PaginationType.Input} disabled />);

      expect(screen.getByLabelText('Go to previous page')).toBeDisabled();
      expect(screen.getByLabelText('Go to next page')).toBeDisabled();
      expect(screen.getByDisplayValue(5)).toBeDisabled();
    });
  });
});
