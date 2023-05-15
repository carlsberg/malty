import { useMemo } from 'react';

export const LEFT_DOTS = 'left-dots';
export const RIGHT_DOTS = 'right-dots';
const BASE_PAGES_COUNT = 3; // firstPage + lastPage + currentPage
const SIBLING_COUNT_FACTOR = 2;
const DOTS_AMOUNT = 2;

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface Props {
  totalPageCount: number;
  siblingCount?: number;
  currentPage: number;
  isDefault: boolean;
}

export const usePagination = ({ totalPageCount, siblingCount = 1, currentPage, isDefault }: Props) =>
  useMemo(() => {
    if (!isDefault) {
      return null;
    }

    const renderedPages = BASE_PAGES_COUNT + siblingCount * SIBLING_COUNT_FACTOR;

    if (renderedPages + DOTS_AMOUNT >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const shouldDisplayLeftDots = currentPage > BASE_PAGES_COUNT + siblingCount;
    const shouldDisplayRightDots = currentPage <= totalPageCount - (BASE_PAGES_COUNT + siblingCount);

    if (shouldDisplayRightDots && shouldDisplayLeftDots) {
      const leftSiblingIndex = currentPage - siblingCount;
      const rightSiblingIndex = currentPage + siblingCount;
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [1, LEFT_DOTS, ...middleRange, RIGHT_DOTS, totalPageCount];
    }

    if (shouldDisplayRightDots) {
      const leftRange = range(1, renderedPages);

      return [...leftRange, RIGHT_DOTS, totalPageCount];
    }

    if (shouldDisplayLeftDots) {
      const rightRange = range(totalPageCount - renderedPages + 1, totalPageCount);

      return [1, LEFT_DOTS, ...rightRange];
    }

    return null;
  }, [totalPageCount, siblingCount, currentPage, isDefault]);
