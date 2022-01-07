import React, { useState } from 'react';
import { Pagination } from './Pagination';

export const BasicPagination = () => {
  const [page, setPage] = useState(0);
  return <Pagination page={page} onChange={(page) => setPage(page)} />;
};
