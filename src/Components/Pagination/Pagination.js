import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from "ResuableFunctions/CustomHooks";
import "Stylesheet/Scss/Pagination.scss";
import { useDispatch } from 'react-redux';
import { updateCurrentPage } from 'Views/Common/Slice/Common_slice';


const Pagination = ({
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  }) =>{;
  const dispatch = useDispatch();
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0) {
    return null;
  }

  const onNext = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const onPrevious = () => {
    dispatch(updateCurrentPage(currentPage - 1));
  };
  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <ul
      className={classnames('pagination-container ps-0 col-7', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange?.map((pageNumber,pageInd) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={pageInd}>&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => dispatch(updateCurrentPage(pageNumber))}
            key={pageInd}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
