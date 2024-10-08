import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { Pagination, PaginationType } from '@carlsberg/malty.molecules.pagination';
import React from 'react';
import { StyledInfo, StyledPaginationWrapper, StyledWrapper } from './Footer.styled';
import { FooterProps } from './Footer.types';

export const Footer = ({
  pageIndex,
  pageSize,
  totalRecords,
  itemsSelected,
  dataTestId,
  pageCount,
  onChange
}: FooterProps) => {
  const getPaginationInformation = () => {
    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = firstIndex + pageSize - 1;
    const limitedLastIndex = totalRecords > 0 && lastIndex < totalRecords ? lastIndex : totalRecords;

    if (firstIndex === totalRecords) {
      return `${limitedLastIndex} of ${totalRecords}`;
    }

    return `${firstIndex} - ${limitedLastIndex} of ${totalRecords}`;
  };

  return (
    <StyledWrapper data-testid={`${dataTestId}-pagination`}>
      {itemsSelected ? (
        <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support100}>
          {`Selecting ${itemsSelected} of ${totalRecords}`}
        </Text>
      ) : null}
      <StyledPaginationWrapper>
        <StyledInfo color={TextColor.Support60} textStyle={TextStyle.SmallDefault}>
          {getPaginationInformation()}
        </StyledInfo>
        <Pagination type={PaginationType.Input} count={pageCount} currentPage={pageIndex + 1} onChange={onChange} />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
};
