
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Limit displayed page numbers for better UX
  let pagesToShow = pageNumbers;
  if (totalPages > 5) {
    if (currentPage <= 3) {
      // Show first 5 pages + last page
      pagesToShow = [...pageNumbers.slice(0, 5), totalPages];
    } else if (currentPage >= totalPages - 2) {
      // Show first page + last 5 pages
      pagesToShow = [1, ...pageNumbers.slice(totalPages - 5)];
    } else {
      // Show first page + current-1, current, current+1 + last page
      pagesToShow = [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
    }
  }
  
  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex rounded-md shadow">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-l-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {pagesToShow.map((page, index) => {
          // Add ellipsis
          if (index > 0 && page - pagesToShow[index - 1] > 1) {
            return (
              <React.Fragment key={`ellipsis-${index}`}>
                <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium text-gray-700">
                  ...
                </span>
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`px-3 py-1 border border-gray-300 text-sm font-medium ${
                    page === currentPage
                      ? 'bg-brand-blue text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              </React.Fragment>
            );
          }
          
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 border border-gray-300 text-sm font-medium ${
                page === currentPage
                  ? 'bg-brand-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          );
        })}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-r-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
