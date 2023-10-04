import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Details from "./Details";
import Pagination from "./Pagination";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./Table.module.css";

function Table() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const deleteUser = (userId) => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      setIsDeleteModalOpen(false);
      setIsLoading(false);
      setAlertMessage("User deleted successfully.");
    }, 1000);
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const updateUser = (updatedUser) => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setIsEditModalOpen(false);
      setIsLoading(false);
      setAlertMessage("User updated successfully.");
    }, 1000);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className={`${styles.tableWrapper} container`}>
      {isLoading && <div className="loading">Loading...</div>}
      <table className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>City</h3>
          <h3>Actions</h3>
        </div>
        <div className={styles.tableBody}>
          {currentUsers.map((user) => (
            <div key={user.id} className={styles.user}>
              <p onClick={() => history.push(`/user/${user.id}`)}>
                {user.name}
              </p>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p className={styles.buttons}>
                <button onClick={() => editUser(user)}>Edit</button>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setIsDeleteModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </p>
            </div>
          ))}
        </div>
      </table>

      <Pagination
        className={styles.pagination}
        currentPage={currentPage}
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        onPageChange={onPageChange}
      />

      {isDeleteModalOpen && selectedUser && (
        <div className={styles.modalOverlay}>
          <Delete
            user={selectedUser}
            deleteUser={deleteUser}
            closeModal={() => setIsDeleteModalOpen(false)}
          />
        </div>
      )}

      {isEditModalOpen && selectedUser && (
        <div className={styles.modalOverlay}>
          <Edit
            user={selectedUser}
            updateUser={updateUser}
            closeModal={() => setIsEditModalOpen(false)}
          />
        </div>
      )}

      {alertMessage && <div className={styles.alert}>{alertMessage}</div>}
    </div>
  );
}

export default Table;
