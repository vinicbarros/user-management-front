import { Dispatch, SetStateAction } from "react";
import { NestedKeyOf, TableSortType } from "../types/TableSortType";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

interface TableHeadProps {
  sort: TableSortType;
  setSort: Dispatch<SetStateAction<TableSortType>>;
}

interface ITableColumn {
  tableName: string;
  sortKey: NestedKeyOf<IUser>;
}

const tableColumns = [
  {
    tableName: "Name",
    sortKey: "name",
  },
  {
    tableName: "Username",
    sortKey: "username",
  },
  {
    tableName: "Email",
    sortKey: "email",
  },
  {
    tableName: "Phone",
    sortKey: "phone",
  },
  {
    tableName: "City",
    sortKey: "address.city",
  },
  {
    tableName: "Company",
    sortKey: "company.name",
  },
] as ITableColumn[];

export function TableHead({ sort, setSort }: TableHeadProps) {
  const handleSort = (key: NestedKeyOf<IUser>) => {
    setSort((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  return (
    <thead className="bg-foreground">
      <tr>
        {tableColumns.map((column) => (
          <th
            key={column.tableName}
            onClick={() => handleSort(column.sortKey)}
            className="px-6 py-3 text-start text-xs font-medium uppercase text-secondary cursor-pointer"
          >
            <div className="flex items-center gap-0.5 hover:underline">
              {column.tableName}
              {sort.key === column.sortKey && (
                <ArrowUpIcon
                  className={`size-3 text-primary transition-transform ${
                    sort.direction === "desc" && "rotate-180"
                  }`}
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
