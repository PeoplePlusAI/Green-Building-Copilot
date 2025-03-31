import React from 'react'
import ReactPaginate from 'react-paginate'

const ReactPaginateComp = () => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={150}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="pagination-container w-100"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active-page"
      disabledClassName="disabled-page"
    />
  )
}

export default ReactPaginateComp