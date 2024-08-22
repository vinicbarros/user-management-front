import { useState } from "react";

export function usePagination(initialPage: number, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = <T>(items: T[]): T[] => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  return { currentPage, setCurrentPage, paginate };
}
