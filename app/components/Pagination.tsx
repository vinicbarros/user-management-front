import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav className="flex items-center space-x-1" aria-label="Pagination">
      <button
        type="button"
        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full hover:bg-foreground focus:outline-none focus:bg-foreground disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          type="button"
          className={`min-w-[40px] flex justify-center items-center focus:outline-none py-2.5 text-sm rounded-full  ${
            currentPage === index + 1 ? "bg-tertiary" : "hover:bg-foreground"
          }`}
          aria-current={currentPage === index + 1 ? "page" : undefined}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        type="button"
        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-foreground focus:outline-none focus:bg-foreground disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </button>
    </nav>
  );
}
