import axios from "axios";
import React, { useState } from "react";
import Pagination from "react-js-pagination";

export const CommonPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // total records per page to display
  const recordPerPage = props.postsPerPage;
  // total number of the records
  const totalRecords = props.totalPosts;
  // range of pages in paginator
  // const pageRange = 3;
  // handle change event
  const handlePageChange = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://jobs.orcaloholding.co.uk/api/jobs?page=${pageNumber}`
      );
      props.setData(response?.data?.data?.data);
      setCurrentPage(response?.data?.data?.meta?.current_page);
    } catch (error) {
      console.log(error);
    }
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="page-pagination mt-4">
        <Pagination
          prevPageText="<"
          nextPageText=">"
          firstPageText="<<"
          lastPageText=">>"
          activePage={currentPage}
          itemsCountPerPage={recordPerPage}
          totalItemsCount={totalRecords}
          // pageRangeDisplayed={pageRange}
          onChange={handlePageChange}
          activeClass="bg-emerald-600/10 text-emerald-600 font-semibold rounded"
        />
      </div>
    </>
  );
};
