import { useState } from "react";
import { TableSortType } from "../types/TableSortType";
import { getValue } from "../utils/getValue";

export function useSort(initialSortConfig: TableSortType) {
  const [sort, setSort] = useState<TableSortType>(initialSortConfig);

  const sortedUsers = (users: IUser[]) => {
    return [...users].sort((a, b) => {
      const aValue = getValue(a, sort.key) ?? "";
      const bValue = getValue(b, sort.key) ?? "";
      if (aValue < bValue) {
        return sort.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sort.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  return { sort, setSort, sortedUsers };
}
