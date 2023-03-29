import { nanoid } from "@reduxjs/toolkit";
import React from "react";

const Pagination = ({ page, setPage }) => {
  const pageNumbers = Array.from({ length: page.total }, (_, i) => i);

  console.log(pageNumbers);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li onClick={()=>setPage({...page, current: page.current-1})} className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {pageNumbers?.map((item) => {
          return (
            <li key={nanoid()} onClick={()=>setPage({...page, current: item})} className={`page-item ${page.current === item && 'active'}`}>
              <a className="page-link" href="#">
                {item}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a onClick={()=>setPage({...page, current: page.current+1})} className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
