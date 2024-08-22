import { TableHead } from "./TableHead";
import { TableSortType } from "../types/TableSortType";
import { UserRow } from "./UserRow";
import { Dispatch, SetStateAction } from "react";

interface UserTableProps {
  users: IUser[];
  sort: TableSortType;
  setSort: Dispatch<SetStateAction<TableSortType>>;
  error: string | null;
}

export const UserTable = ({ users, sort, setSort, error }: UserTableProps) => {
  return (
    <table className="divide-y w-full">
      <TableHead sort={sort} setSort={setSort} />

      <tbody className="divide-y divide-gray-200">
        {users.length > 0 ? (
          users.map((user) => <UserRow key={user.id} user={user} />)
        ) : (
          <tr className="h-[240px]">
            <td colSpan={6} className="text-center">
              {error !== null ? error : "No users found."}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
