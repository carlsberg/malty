/* eslint-disable react/no-array-index-key */
import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { DOTS } from '@carlsberggroup/malty.molecules.pagination/Pagination.helper';
import { StyledDots } from '@carlsberggroup/malty.molecules.pagination/Pagination.styled';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
  paginationRange: (string | number)[];
  type?: PaginationType;
  onPageClick: (pageNr: number) => void;
  onPageKeyUp: (pageNr: number) => void;
  currentPage: number;
  count: number;
}

const Content: FC<Props> = ({
  paginationRange,
  type = PaginationType.default,
  onPageClick,
  onPageKeyUp,
  currentPage,
  count
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const isCompact = type === PaginationType.compact;

  if (isCompact) {
    return (
      <li>
        <Text textStyle={TextStyle.SmallDefault}>{`${currentPage} of ${count}`}</Text>
      </li>
    );
  }
  return (
    <>
      {paginationRange.map((pageNr, idx) => {
        const isCurrentPage = pageNr === currentPage;
        if (pageNr === DOTS) {
          return (
            <li key={`dots-${idx}`} tabIndex={-1}>
              <StyledDots theme={theme}>&#8230;</StyledDots>
            </li>
          );
        }
        return (
          <li key={pageNr}>
            <Button
              style={ButtonStyle.Transparent}
              selected={isCurrentPage}
              onClick={() => onPageClick(Number(pageNr))}
              onKeyUp={() => onPageKeyUp(Number(pageNr))}
              aria-current={isCurrentPage}
              aria-label={isCurrentPage ? `page ${pageNr}` : `Go to page ${pageNr}`}
              tabIndex={0}
              text={pageNr}
            />
          </li>
        );
      })}
    </>
  );
};

export { Content };
