import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import React from 'react';
import { StyledInfo, StyledPaginationWrapper, StyledWrapper } from './Footer.styled';
import { FooterProps } from './Footer.types';

export const Footer = ({
  pageIndex,
  pageSize,
  totalRecords,
  itemsSelected,
  theme,
  dataTestId,
  pageCount,
  onChange
}: FooterProps) => {
  const getPaginationInformation = () => {
    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = firstIndex + pageSize - 1;
    const limitedLastIndex = totalRecords && lastIndex < totalRecords ? lastIndex : totalRecords;

    if (firstIndex === totalRecords) {
      return `${limitedLastIndex} of ${totalRecords}`;
    }

    return `${firstIndex} - ${limitedLastIndex} of ${totalRecords}`;
  };

  return (
    <StyledWrapper data-testid={`${dataTestId}-pagination`} theme={theme}>
      {itemsSelected ? (
        <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support100}>
          {`Selecting ${itemsSelected} of ${totalRecords}`}
        </Text>
      ) : null}
      <StyledPaginationWrapper theme={theme}>
        <StyledInfo color={TextColor.Support60} textStyle={TextStyle.SmallDefault}>
          {getPaginationInformation()}
        </StyledInfo>
        <Pagination type={PaginationType.Input} count={pageCount} currentPage={pageIndex + 1} onChange={onChange} />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
};
