import React from "react";
<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
></link>;
export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div
      className="mt-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        disabled={currentPage === 1}
        className="inline-block cursor-pointer px-5"
        onClick={handlePrevClick}
      >
        <i
          className="uil uil-angle-double-left"
          style={{ fontSize: "22px" }}
        ></i>
      </button>
      {pages?.map((page, index) => {
        if (page === currentPage) {
          return (
            <div
              key={index}
              className={`inline-block Pagination cursor-pointer px-5 activePagination bg-emerald-600/10  text-emerald-600 font-semibold rounded `}
            >
              {page}
            </div>
          );
        } else if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 2 && page <= currentPage + 2)
        ) {
          return (
            <div
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`inline-block Pagination cursor-pointer px-5 ${
                page === currentPage
                  ? "activePagination bg-emerald-600/10  text-emerald-600 font-semibold rounded "
                  : ""
              } `}
              style={{
                color: page === currentPage ? "text-emerald-600" : "",
              }}
            >
              {page}
            </div>
          );
        } else if (
          (page === 2 && currentPage > 4) ||
          (page === totalPages - 1 && currentPage < totalPages - 3)
        ) {
          return (
            <div
              key={index}
              className={`inline-block Pagination cursor-pointer px-5 disabledPagination`}
            >
              {"..."}
            </div>
          );
        } else if (
          (page === 1 && currentPage > 2) ||
          (page === 2 && currentPage === 2) ||
          (page === totalPages && currentPage < totalPages - 2) ||
          (page === totalPages - 1 && currentPage === totalPages - 3)
        ) {
          return (
            <div
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`inline-block Pagination cursor-pointer px-5`}
            >
              {page}
            </div>
          );
        } else {
          return null;
        }
      })}
      <button
        disabled={currentPage === totalPages}
        className="inline-block Pagination cursor-pointer px-5"
        onClick={handleNextClick}
      >
        <i
          className="uil uil-angle-double-right"
          style={{ fontSize: "22px" }}
        ></i>
      </button>
    </div>
  );
};
