import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalUsers, usersPerPage, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={number === currentPage ? styles.active : ""}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
