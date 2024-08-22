"use client";

import { useMemo, useState } from "react";
import { Pagination } from "./Pagination";
import { SearchInput } from "./SearchInput";
import { UserTable } from "./UserTable";
import { useDebounce } from "../hooks/useDebounce";
import { usePagination } from "../hooks/usePagination";
import { useSort } from "../hooks/useSort";

const UserDashboard = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  const usersPerPage = 5;
  const debouncedSearch = useDebounce(search, 300);
  const { currentPage, setCurrentPage, paginate } = usePagination(
    1,
    usersPerPage
  );
  const { sort, setSort, sortedUsers } = useSort({
    key: "name",
    direction: "asc",
  });

  const fetchUsers = async () => {
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const filteredUsers = sortedUsers(users).filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const currentUsers = paginate(filteredUsers);

  return (
    <div className="max-w-full lg:w-[1200px]">
      <div className="border rounded-lg divide-y shadow-md">
        {/* INPUT */}
        <div className="flex items-center justify-between py-3 px-4">
          <SearchInput value={search} onChange={setSearch} />

          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:opacity-90 focus:outline-none focus:bg-primary disabled:opacity-50 transition-opacity shadow-md disabled:pointer-events-none max-h-[46px]"
            onClick={fetchUsers}
          >
            Fetch Users
          </button>
        </div>

        <div className="flex flex-col overflow-hidden">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-x-auto scrollbar overflow-y-hidden h-[322px]">
                <UserTable
                  users={currentUsers}
                  sort={sort}
                  setSort={setSort}
                  error={error}
                />
              </div>

              <div className="flex items-center py-1 px-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
